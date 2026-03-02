import {
  access,
  copyFile,
  constants as fsConst,
  mkdir,
} from "node:fs/promises";
import { sep } from "node:path";
import { logger } from "./logger.js";
import { noOperation } from "./no-operation.js";
import type { TLocalFileName, TPublicFileName } from "./paths.js";

type TFileCopyOperation = {
  source: TLocalFileName;
  destination: TPublicFileName;
};

class ESourceFileDoesntExist extends Error {}
class EDestinationFileAlreadyExists extends Error {}

class CopyQueue {
  private queue: TFileCopyOperation[] = [];

  // We don't check if the local file exists.
  // It must be present only after we `start()` copying.
  public add(local: TLocalFileName, publicFile: TPublicFileName): void {
    if (!this.contains(local, publicFile)) {
      this.queue.push({ source: local, destination: publicFile });
    }
  }

  public start(): Promise<void>[] {
    logger.info("Starting copy queue.");
    logger.info(`${this.queue.length} items found.`);
    const promises: Promise<void>[] = [];
    for (const operation of this.queue) {
      promises.push(
        Promise.all([
          this.checkSourceExists(operation.source),
          this.checkDestinationDoesntExist(operation.destination),
        ])
          .then(() => this.mkdir(operation.destination))
          .then(() => copyFile(operation.source, operation.destination))
          .then(() => {
            logger.info(
              `✅ Copied ${operation.source} to ${operation.destination}`,
            );
          })
          .catch((error: unknown) => {
            logger.error(
              `❌ Cannot copy ${operation.source} to ${operation.destination}`,
            );
            if (error instanceof ESourceFileDoesntExist) {
              logger.info(`Source file ${operation.source} does not exist`);
              return;
            }
            if (error instanceof EDestinationFileAlreadyExists) {
              logger.info(
                `Destination file ${operation.destination} already exists`,
              );
              return;
            }
            logger.error(error);
          }),
      );
    }

    return promises;
  }

  private contains(
    source: TLocalFileName,
    destination: TPublicFileName,
  ): boolean {
    return this.queue.some(
      (item) => item.source === source && item.destination === destination,
    );
  }

  private async checkSourceExists(source: TLocalFileName): Promise<void> {
    return access(source, fsConst.R_OK).catch(() => {
      throw new ESourceFileDoesntExist(`Cannot read file ${source}`);
    });
  }

  private async checkDestinationDoesntExist(
    destination: TPublicFileName,
  ): Promise<void> {
    return access(destination, fsConst.R_OK)
      .then(() => {
        throw new EDestinationFileAlreadyExists(
          `File ${destination} already exists`,
        );
      })
      .catch(noOperation);
  }

  private async mkdir(publicFileName: TPublicFileName): Promise<void> {
    const pathPieces = publicFileName.split(sep);
    pathPieces.pop();
    const path = pathPieces.join(sep);
    if (path !== "") {
      await mkdir(path, { recursive: true });
    }
  }
}

export const copyQueue: CopyQueue = new CopyQueue();
