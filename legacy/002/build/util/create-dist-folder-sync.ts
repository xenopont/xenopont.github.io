import * as fs from "node:fs";
import { logger } from "../../utils/logger.js";
import { distFolder } from "./constants.js";

export const createDistFolderSync = (): void => {
  try {
    if (fs.existsSync(distFolder)) {
      fs.rmSync(distFolder, { recursive: true, force: true });
    }
    fs.mkdirSync(distFolder);
  } catch (error) {
    logger.error("❌ Cannot create the dist folder.");
    logger.error(error);
    throw error;
  }
};
