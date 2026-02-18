import { copyFile } from "node:fs/promises";
import type { TLocalFileName, TPublicFileName } from "../config/paths.js";
import { logger } from "./logger.js";

type TFileCopyOperation = {
  source: TLocalFileName;
  destination: TPublicFileName;
};

class CopyQueue {
  private queue: Set<TFileCopyOperation> = new Set();

  public add(local: TLocalFileName, publicFile: TPublicFileName): void {
    this.queue.add({ source: local, destination: publicFile });
  }

  public async start(): Promise<void> {
    const promises: Promise<void>[] = [];
    for (const operation of this.queue) {
      promises.push(
        copyFile(operation.source, operation.destination)
          .then(() => {
            logger.info(
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

    await Promise.all(promises);
  }
}

export const copyQueue = new CopyQueue();
