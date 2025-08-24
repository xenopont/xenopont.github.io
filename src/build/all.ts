import { startCopyQueue } from "../converters/copy-queue.js";
import { allPages } from "../pages/all.js";
import { logger } from "../utils/logger.js";
import { buildGlobalApp } from "./util/build-global-app.js";
import { copyGlobalAssets } from "./util/copy-global-assets.js";
import { createAssetsFolders } from "./util/create-assets-folders.js";
import { createDistFolderSync } from "./util/create-dist-folder-sync.js";
import { createHtmlPage } from "./util/create-html-page.js";

const main = async (): Promise<PromiseSettledResult<void>[]> => {
  const promises: Promise<void>[] = [];

  createDistFolderSync();
  await createAssetsFolders();
  // The copy queue is already fulfilled by the public pages content
  // when we import them.
  // But it must not be started before the assets folder is ready.
  promises.push(...startCopyQueue());
  promises.push(copyGlobalAssets());
  promises.push(buildGlobalApp());
  for (const page of allPages) {
    promises.push(...createHtmlPage(page));
  }

  return Promise.allSettled(promises);
};

const startTime: number = Date.now();
main().then((buildResult) => {
  logger.log("");
  if (buildResult.some((r) => r.status === "rejected")) {
    logger.error("❌ Build failed.");
    return;
  }
  logger.log(`✅ Build finished in ${(Date.now() - startTime) / 1000} s.`);
});
