import { publicPages } from "../pages/public.js";
import { logger } from "../utils/logger.js";
import { buildGlobalApp } from "./util/build-global-app.js";
import { copyGlobalAssets } from "./util/copy-global-assets.js";
import { createAssetsFolder } from "./util/create-assets-folder.js";
import { createDistFolderSync } from "./util/create-dist-folder-sync.js";
import { createHtmlPage } from "./util/create-html-page.js";

const main = async (): Promise<void> => {
  const promises: Promise<void>[] = [];

  createDistFolderSync();
  await createAssetsFolder();
  promises.push(copyGlobalAssets());
  promises.push(buildGlobalApp());
  for (const page of publicPages) {
    promises.push(...createHtmlPage(page));
  }

  await Promise.all(promises);
};

const startTime = Date.now();
main().then(() =>
  logger.log(`✅ Build finished in ${(Date.now() - startTime) / 1000} s.`),
);
