import { access, copyFile, constants as fsConst } from "node:fs/promises";
import type { TLocalFileName, TPublicFileName } from "../config/paths.js";
import { logger } from "./logger.js";

type TFileCopyOperation = {
  source: TLocalFileName;
  destination: TPublicFileName;
};

class SourceFileDoesntExistError extends Error {}
class DestinationFileAlreadyExistsError extends Error {}

class CopyQueue {
  private queue: Set<TFileCopyOperation> = new Set();

  public add(local: TLocalFileName, publicFile: TPublicFileName): void {
    this.queue.add({ source: local, destination: publicFile });
  }

  public async start(): Promise<void> {
    const promises: Promise<void>[] = [];
    for (const operation of this.queue) {
      promises.push(
        Promise.all([
          this.checkSourceExists(operation.source),
          this.checkDestinationDoesntExist(operation.destination),
        ])
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
            if (error instanceof SourceFileDoesntExistError) {
              logger.info(`Source file ${operation.source} does not exist`);
              return;
            }
            if (error instanceof DestinationFileAlreadyExistsError) {
              logger.info(
                `Destination file ${operation.destination} already exists`,
              );
              return;
            }
          }),
      );
    }

    await Promise.all(promises);
  }

  private async checkSourceExists(source: TLocalFileName): Promise<void> {
    return access(source, fsConst.R_OK).catch(() => {
      throw new SourceFileDoesntExistError(`Cannot read file ${source}`);
    });
  }

  private async checkDestinationDoesntExist(
    destination: TPublicFileName,
  ): Promise<void> {
    return access(destination, fsConst.R_OK)
      .then(() => {
        throw new DestinationFileAlreadyExistsError(
          `File ${destination} already exists`,
        );
      })
      .catch();
  }
}

export const copyQueue = new CopyQueue();
