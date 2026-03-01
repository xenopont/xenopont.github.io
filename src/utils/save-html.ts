import { mkdir, writeFile } from "node:fs/promises";
import type { TPublicDirectory, TPublicFileName } from "./paths.js";

export const saveHTML = (
  html: string,
  publicDirectory: TPublicDirectory,
  publicFileName: TPublicFileName,
): Promise<void> =>
  mkdir(publicDirectory, { recursive: true }).then(() =>
    writeFile(publicFileName, html),
  );
