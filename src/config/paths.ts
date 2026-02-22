import { access, constants as fsConst } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { logger } from "../utils/logger.js";
import { publicRoot, sourceRoot } from "./constants.js";

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
const PUBLIC_ROOT: string = resolve(publicRoot);

export class EInvalidLocalFileName extends Error {}
export class EInvalidPublicDirectory extends Error {}

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
    throw new EInvalidLocalFileName(
      `❌ Unable to get the path for the file "${str}" outside the project.`,
    );
  }

  try {
    await access(absolutePath, fsConst.R_OK);
  } catch (e: unknown) {
    const msg = `❌ Cannot read file "${str}"`;
    if (e instanceof Error) {
      logger.error(msg);
      throw e;
    } else {
      throw new EInvalidLocalFileName(`${msg}: ${e}`);
    }
  }

  return absolutePath as TLocalFileName;
};

const validPublicDirectoryChars: Set<string> = new Set([
  "-",
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."0123456789",
  ..."абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
  ..."äöüè",
]);

export const toPublicDirectory = (str: string): TPublicDirectory => {
  const absolutePath = resolve(str);

  if (!absolutePath.startsWith(PUBLIC_ROOT)) {
    throw new EInvalidPublicDirectory(
      `❌ Unable to get the path for the directory "${str}" outside the public root.`,
    );
  }

  const relativePath = absolutePath.slice(PUBLIC_ROOT.length);

  // If it's exactly the public root, it's valid (relativePath is empty)
  if (relativePath.length <= 0) {
    return absolutePath as TPublicDirectory;
  }

  // Check if the relative part starts with a path separator
  if (!relativePath.startsWith(sep)) {
    // This case handles strings like "/dist-stuff" instead of "/dist/stuff"
    throw new EInvalidPublicDirectory(
      `❌ Path "${str}" is not inside the public root.`,
    );
  }

  const pathPieces = relativePath.split(sep).filter((p) => p.length > 0);

  for (const part of pathPieces) {
    for (const char of part) {
      if (!validPublicDirectoryChars.has(char)) {
        throw new EInvalidPublicDirectory(
          `❌ Directory "${str}" contains disallowed character "${char}".\n` +
            "Only lowercase letters, numbers, and dashes are allowed.",
        );
      }
    }
  }

  return absolutePath as TPublicDirectory;
};
