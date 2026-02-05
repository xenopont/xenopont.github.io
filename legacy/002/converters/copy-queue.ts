import { copyFile } from "node:fs/promises";
import { logger } from "../utils/logger.js";

type TFileCopyOperation = {
  source: string;
  destination: string;
};

export const copyQueue: Set<TFileCopyOperation> = new Set([]);

export const startCopyQueue = (): Promise<void>[] => {
  const promises: Promise<void>[] = [];
  for (const operation of copyQueue) {
    promises.push(
      copyFile(operation.source, operation.destination)
        .then(() => {
          logger.log(
            `✅ Copied ${operation.source} to ${operation.destination}`,
          );
        })
        .catch((error) => {
          logger.error(
            `❌ Cannot copy ${operation.source} to ${operation.destination}`,
          );
          logger.error(error);
        }),
    );
  }

  return promises;
};
