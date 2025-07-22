import * as fs from "node:fs";
import { writeFile } from "node:fs/promises";
import { publicPages } from "../pages/public.js";
import type { TPage } from "../types/page.js";
import { buildId } from "../utils/build-id.js";
import { logger } from "../utils/logger.js";
import { buildApp } from "./html/build-app.js";
import { generateId } from "../utils/generate-id.js";

const distFolder = "dist";
const sourceAssets = "src/global-assets";
const globalApplication = "src/app.ts";

const createHtmlPage = (page: TPage, buildId: string): string => {
  let missingResources = false;
  const headTags: string[] = [];

  headTags.push(`<title>${page.title}</title>`);
  if (!page.excludeGlobalApp) {
    headTags.push(`<script src="/assets-${buildId}/js/global.js"></script>`);
  }
  if (!page.excludeGlobalStylesheet) {
    headTags.push(
      `<link rel="stylesheet" href="/assets-${buildId}/css/global.css">`,
    );
  }
  // local app
  if (page.localApp !== "") {
    if (!fs.existsSync(page.localApp)) {
      missingResources = true;
      logger.error(`❌ Local app "${page.localApp}" not found`);
    } else {
      const localAppUri = `assets-${buildId}/js/${generateId()}.js`;
      headTags.push(`<script src="/${localAppUri}"></script>`);
      buildApp(page.localApp, `${distFolder}/${localAppUri}`).then(() =>
        logger.log(`Local app for ${page.title} built successfully`),
      );
    }
  }
  // local stylesheet

  if (missingResources) {
    throw new Error("Missing resources");
  }

  return `<!doctype html>
<html lang="${page.language}">
<head>\n${headTags.join("\n  ")}</head>
<body>
${page.content}
</body>
</html>`;
};

const createDistFolder = (): boolean => {
  try {
    if (!fs.existsSync(distFolder)) {
      fs.mkdirSync(distFolder);
    }
    // cleanup dist
    const items = fs.readdirSync(distFolder);
    for (const item of items) {
      const filePath = `${distFolder}/${item}`;
      fs.rmSync(filePath, { recursive: true, force: true });
    }
  } catch (error) {
    logger.error(error);
    return false;
  }
  return true;
};

const main = (): void => {
  if (!createDistFolder()) {
    logger.error("Could not create dist folder");
    return;
  }
  // copy global-assets
  if (fs.existsSync(sourceAssets)) {
    fs.cpSync(sourceAssets, `${distFolder}/assets-${buildId}`, {
      recursive: true,
    });
  }

  // global application
  buildApp(globalApplication, `${distFolder}/assets-${buildId}/js/global.js`)
    .then(() => logger.log("Global application built successfully"))
    .catch(() => logger.error("❌ Global application build failed"));

  // create public pages
  for (const page of publicPages) {
    const html = createHtmlPage(page, buildId);
    if (page.path !== "") {
      fs.mkdirSync(`${distFolder}/${page.path}`, { recursive: true });
    }
    const subPath = page.path === "" ? "" : `${page.path}/`;
    const fullPath = `${distFolder}/${subPath}${page.filename}`;
    writeFile(fullPath, html).then(() => {
      logger.log(`Page "${page.title}" written to ${fullPath}`);
    });
  }

  logger.log("Build complete");
};

main();
