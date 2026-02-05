import { staticImagesFolder } from "../build/util/constants.js";
import type { TImageUri } from "../types/image-uri.js";
import { filenameToUri } from "./filename-to-uri.js";

const allowedExtensions: Set<string> = new Set([
  "gif",
  "jpg",
  "jpeg",
  "png",
  "webp",
]);

export const filenameToImageUri = (
  sourceFilename: string,
  baseFilename?: string,
): TImageUri => {
  return filenameToUri(
    sourceFilename,
    allowedExtensions,
    `${staticImagesFolder}`,
    "TImageUri",
    baseFilename ?? "img",
  );
};
