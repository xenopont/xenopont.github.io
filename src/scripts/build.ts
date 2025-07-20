import * as fs from "node:fs";
import { buildId } from "../utils/build-id.js";
import { logger } from "../utils/log.js";

const distFolder = "dist";
const sourceAssets = "src/global-assets";

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
  } catch (error) {
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
