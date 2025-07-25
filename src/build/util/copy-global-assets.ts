import fs from "node:fs";
import { logger } from "../../utils/logger.js";
import {
  assetsFolder,
  distFolder,
  globalAssetsSourceFolder,
} from "./constants.js";

export const copyGlobalAssets = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.cp(
      globalAssetsSourceFolder,
      `${distFolder}/${assetsFolder}`,
      { recursive: true },
      (error) => {
        if (error) {
          logger.error("❌ Cannot copy global assets.");
          reject(error);
        }
        logger.log("✅ Global assets copied.");
        resolve();
      },
    );
  });
};
