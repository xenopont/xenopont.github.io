import { imagesFolder } from "../build/util/constants.js";
import type { TImageUri } from "../types/image-uri.js";
import { filenameToUri } from "./filename-to-uri.js";

const allowedExtensions = new Set(["gif", "jpg", "jpeg", "png", "webp"]);

export const filenameToImageUri = (sourceFilename: string): TImageUri => {
  return filenameToUri(
    sourceFilename,
    allowedExtensions,
    `${imagesFolder}`,
    "TImageUri",
    "img",
  );
};
