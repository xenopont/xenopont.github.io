import { access, constants } from "node:fs/promises";
import { resolve } from "node:path";
import { logger } from "../utils/logger.js";
import { sourceRoot } from "./constants.js";

/**
 * There are the following possible paths in the app:
 * 1. TLocalFileName: <...>/src/content/my-page/my-image.webp
 *    Validate, that file exists.
 * 2. TPublicDirectory: ./dist/images
 * 3. TPublicFile: ./dist/images/my-image.webp
 * 4. TWebUri: /images/my-image.webp
 *    Validate, that contains only allowed characters, properly structured.
 */

const SOURCE_ROOT: string = resolve(sourceRoot);

export class LocalFileNameError extends Error {}

declare const __brandTLocalFileName: unique symbol;
export type TLocalFileName = string & {
  [__brandTLocalFileName]: "TLocalFileName";
};

declare const __brandTPublicDirectory: unique symbol;
export type TPublicDirectory = string & {
  [__brandTPublicDirectory]: "TPublicDirectory";
};

declare const __brandTPublicFileName: unique symbol;
export type TPublicFileName = string & {
  [__brandTPublicFileName]: "TPublicFileName";
};

declare const __brandTWebUri: unique symbol;
export type TWebUri = string & { [__brandTWebUri]: "TWebUri" };

export const toLocalFileName = async (str: string): Promise<TLocalFileName> => {
  const absolutePath = resolve(str);

  if (!absolutePath.startsWith(SOURCE_ROOT)) {
    throw new LocalFileNameError(
      `❌ Unable to get the path for the file "${str}" outside the project.`,
    );
  }

  try {
    await access(absolutePath, constants.R_OK);
  } catch (e: unknown) {
    const msg = `❌ Cannot read file "${str}"`;
    if (e instanceof Error) {
      logger.error(msg);
      throw e;
    } else {
      throw new LocalFileNameError(`${msg}: ${e}`);
    }
  }

  return absolutePath as TLocalFileName;
};
