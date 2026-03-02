import { mkdir, writeFile } from "node:fs/promises";
import type { TValidHtmlFileName } from "./filenames.js";
import type { TPublicDirectory } from "./paths.js";

export const saveHTML = (
  html: string,
  publicDirectory: TPublicDirectory,
  publicFileName: TValidHtmlFileName,
): Promise<void> =>
  mkdir(publicDirectory, { recursive: true }).then(() =>
    writeFile(publicFileName, html),
  );
