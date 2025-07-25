import fs from "node:fs";
import { writeFile } from "node:fs/promises";
import type { TPage } from "../../types/page.js";
import { generateId } from "../../utils/generate-id.js";
import { logger } from "../../utils/logger.js";
import { buildApp } from "./build-app.js";
import {
  distFolder,
  globalAppFile,
  globalCssFile,
  jsFolder,
} from "./constants.js";

export const createHtmlPage = (page: TPage): Promise<void>[] => {
  const headTags: string[] = [];
  let missingResources = false;
  const promises: Promise<void>[] = [];

  // title
  headTags.push(`<title>${page.title}</title>`);

  // global app
  if (!page.excludeGlobalApp) {
    headTags.push(`<script src="/${globalAppFile}"></script>`);
  }

  // global styles
  if (!page.excludeGlobalStylesheet) {
    headTags.push(`<link rel="stylesheet" href="/${globalCssFile}">`);
  }

  // local app
  if (page.localApp !== "") {
    if (!fs.existsSync(page.localApp)) {
      missingResources = true;
      logger.error(`❌ Local app "${page.localApp}" not found`);
    } else {
      const localAppUri = `${jsFolder}/${generateId()}.js`;
      headTags.push(`<script src="/${localAppUri}"></script>`);
      promises.push(buildApp(page.localApp, `${distFolder}/${localAppUri}`));
    }
  }

  // local styles

  if (missingResources) {
    throw new Error("Missing resources");
  }

  const html = `<!doctype html>
<html lang="${page.language}">
<head>\n${headTags.join("\n  ")}</head>
<body>
${page.content}
</body>
</html>`;

  if (page.path !== "") {
    fs.mkdirSync(`${distFolder}/${page.path}`, { recursive: true });
  }
  const subPath = page.path === "" ? "" : `${page.path}/`;
  const fullPath = `${distFolder}/${subPath}${page.filename}`;
  promises.push(
    writeFile(fullPath, html).then(() => {
      logger.log(`✅ Page "${page.title}" written to ${fullPath}`);
    }),
  );

  return promises;
};
