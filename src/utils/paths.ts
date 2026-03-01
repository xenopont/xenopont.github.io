import { resolve, sep } from "node:path";
import { publicRoot, sourceRoot } from "../config/constants.js";
import { baseUrl } from "./base-url.js";

/**
 * There are the following possible paths in the app:
 * 1. TLocalFileName: <...>/src/content/my-page/my-image.webp
 * 2. TPublicDirectory: <...>/dist/images
 *    a) TPublicPathPiece: contains only valid characters
 *    b) TPublicSubPath: path pieces separated by node:path.sep
 * 3. TPublicFile: <...>/dist/images/my-image.webp
 * 4. TWebUri: https://example.com/images/my-image.webp
 *
 * We only validate the structure of the paths. The source file
 * doesn't have to exist at this moment.
 */

const SOURCE_ROOT: string = resolve(sourceRoot);
export const PUBLIC_ROOT: string = resolve(publicRoot);

export class EInvalidLocalFileName extends Error {}
export class EInvalidPublicPathPiece extends Error {}
export class EInvalidPublicDirectory extends Error {}
export class EInvalidPublicFileName extends Error {}

declare const __brandTLocalFileName: unique symbol;
export type TLocalFileName = string & {
  [__brandTLocalFileName]: "TLocalFileName";
};

declare const __brandTPublicPathPiece: unique symbol;
export type TPublicPathPiece = string & {
  [__brandTPublicPathPiece]: "TPublicPathPiece";
};

declare const __brandTPublicSubPath: unique symbol;
export type TPublicSubPath = string & {
  [__brandTPublicSubPath]: "TPublicSubPath";
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

export const toLocalFileName = (str: string): TLocalFileName => {
  const absolutePath = resolve(str);

  if (!absolutePath.startsWith(SOURCE_ROOT)) {
    throw new EInvalidLocalFileName(
      `❌ Unable to get the path for the file "${str}" outside the project.`,
    );
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
const isValidPublicPathPiece = (str: string): boolean => {
  for (const char of str) {
    if (!validPublicDirectoryChars.has(char)) {
      return false;
    }
  }

  return true;
};

export const toPublicPathPiece = (str: string): TPublicPathPiece => {
  if (!isValidPublicPathPiece(str)) {
    throw new EInvalidPublicPathPiece(
      `❌ "${str}" contains invalid characters and can not be a public directory name.`,
    );
  }

  return str as TPublicPathPiece;
};

export const toPublicSubPath = (str: string): TPublicSubPath => {
  const pieces = str.split("/");
  for (const p of pieces) {
    if (!isValidPublicPathPiece(p)) {
      throw new EInvalidPublicPathPiece(
        `❌ Subpath "${str}" contains invalid characters.`,
      );
    }
  }

  return pieces.join(sep) as TPublicSubPath;
};

export const toPublicDirectory = (str: string): TPublicDirectory => {
  let normalizedStr = str;

  if (normalizedStr === "" || normalizedStr === "/") {
    return PUBLIC_ROOT as TPublicDirectory;
  }

  if (normalizedStr.startsWith("/")) {
    normalizedStr = normalizedStr.slice(1);
  }

  const absolutePath = resolve(PUBLIC_ROOT, normalizedStr);

  if (!absolutePath.startsWith(PUBLIC_ROOT)) {
    throw new EInvalidPublicDirectory(
      `❌ Unable to get the path for the directory "${str}" outside the public root.`,
    );
  }

  const relativePath = absolutePath.slice(PUBLIC_ROOT.length);

  if (relativePath.length <= 0) {
    return absolutePath as TPublicDirectory;
  }

  if (!relativePath.startsWith(sep)) {
    // This case handles strings like "/dist-stuff" instead of "/dist/stuff"
    throw new EInvalidPublicDirectory(
      `❌ Path "${str}" is not inside the public root.`,
    );
  }

  const pathPieces = relativePath.split(sep).filter((p) => p.length > 0);

  for (const piece of pathPieces) {
    if (!isValidPublicPathPiece(piece)) {
      throw new EInvalidPublicDirectory(
        `❌ Directory "${str}" contains disallowed piece "${piece}".`,
      );
    }
  }

  return absolutePath as TPublicDirectory;
};

export const toPublicFileName = (
  directory: TPublicDirectory,
  filename: string,
): TPublicFileName => {
  const pieces = filename.split(".");
  for (const p of pieces) {
    if (!isValidPublicPathPiece(p)) {
      throw new EInvalidPublicPathPiece(
        `❌ Filename "${filename}" contains invalid characters.`,
      );
    }
  }

  return `${directory}${sep}${filename}` as TPublicFileName;
};

export function toWebUri(filename: TPublicFileName): TWebUri {
  const absolutePath = resolve(filename);

  if (!absolutePath.startsWith(PUBLIC_ROOT)) {
    throw new EInvalidPublicFileName(
      `❌ Path "${filename}" is outside the public root.`,
    );
  }

  const relativePath = absolutePath.slice(PUBLIC_ROOT.length);

  if (!relativePath.startsWith(sep)) {
    throw new EInvalidPublicFileName(
      `❌ Path "${filename}" is not inside the public root.`,
    );
  }

  const uriPieces = relativePath.split(sep).filter((p) => p.length > 0);
  if (uriPieces[uriPieces.length - 1] === "index.html") {
    uriPieces.pop();
  }
  const uri = uriPieces.join("/");

  return `${baseUrl}/${uri}` as TWebUri;
}
