import type { THtmlFile } from "../types/html-file.js";

const allowedExtensions = new Set(["html", "htm"]);

export const convertStringToHtmlFile = (source: string): THtmlFile => {
  const extension = source.split(".").pop();
  if (!extension || !allowedExtensions.has(extension)) {
    throw new Error(
      `Cannot safely convert ${source} to THtmlFile.
      Allowed extensions are: ${[...allowedExtensions].join(", ")}`,
    );
  }

  return source as THtmlFile;
};
