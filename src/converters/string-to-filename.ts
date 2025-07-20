import type { TFilename } from "../types/filename.js";

const allowedExtensions = new Set(["html", "htm"]);

export const convertStringToFilename = (source: string): TFilename => {
  const extension = source.split(".").pop();
  if (!extension || !allowedExtensions.has(extension)) {
    throw new Error(
      `Cannot safely convert ${source} to Filename.
      Allowed extensions are: ${[...allowedExtensions].join(", ")}`,
    );
  }

  return source as TFilename;
};
