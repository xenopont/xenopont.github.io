import * as fs from "node:fs";
import { writeFile } from "node:fs/promises";
import { build } from "esbuild";
import { publicPages } from "../pages/public.js";
import type { TPage } from "../pages/types/page.js";
import { buildId } from "../utils/build-id.js";
import { logger } from "../utils/logger.js";
import { generateHead } from "./build-helpers/html.js";

const distFolder = "dist";
const sourceAssets = "src/global-assets";
const globalApplication = "src/app.ts";

const buildGlobalApp = (buildId: string): void => {
  const entryFile = globalApplication;
  const outFile = `${distFolder}/assets-${buildId}/js/global.js`;
  build({
    entryPoints: [entryFile],
    bundle: true,
    outfile: outFile,
    platform: "browser",
    format: "iife",
    sourcemap: true,
    minify: true,
  })
    .then(() => {
      logger.log("Global app build complete");
    })
    .catch((error) => {
      logger.error("Global app build failed:", error);
    });
};

const createHtmlPage = (page: TPage, buildId: string): string => {
  const head = generateHead(page, buildId);

  return `<!doctype html>
<html lang="${page.language}">
${head}
<body></body>
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
    // copy global-assets
    if (fs.existsSync(sourceAssets)) {
      fs.cpSync(sourceAssets, `${distFolder}/assets-${buildId}`, {
        recursive: true,
      });
    }
    // global application
    buildGlobalApp(buildId);
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

  logger.log("Build complete");
};

main();
