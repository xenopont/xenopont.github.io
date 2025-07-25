import fs from "node:fs";
import { logger } from "../../utils/logger.js";
import { buildApp } from "./build-app.js";
import { distFolder, globalAppFile, globalAppSourceFile } from "./constants.js";

export const buildGlobalApp = async (): Promise<void> => {
  if (!fs.existsSync(globalAppSourceFile)) {
    logger.warn(
      `⚠️ Global app entry point ${globalAppSourceFile} not found, it won't be available.`,
    );

    return;
  }

  return buildApp(globalAppSourceFile, `${distFolder}/${globalAppFile}`);
};
