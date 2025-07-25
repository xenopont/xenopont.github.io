import * as fs from "node:fs";
import type { TImageFile } from "../types/image-file.js";

const allowedExtensions = new Set(["jpg", "jpeg", "png", "gif", "webp"]);

export const convertStringToImageFile = (source: string): TImageFile => {
  const extension = source.split(".").pop();
  if (!extension || !allowedExtensions.has(extension)) {
    throw new Error(
      `Cannot safely convert ${source} to TImageFile.
      Allowed extensions are: ${[...allowedExtensions].join(", ")}`,
    );
  }
  if (!fs.existsSync(source)) {
    throw new Error(`❌ Required resource ${source} not found`);
  }

  return source as TImageFile;
};
