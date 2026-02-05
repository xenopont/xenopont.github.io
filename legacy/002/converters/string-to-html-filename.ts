import type { THtmlFilename } from "../types/html-filename.js";
import { stringToFilename } from "./string-to-filename.js";

const allowedExtensions: Set<string> = new Set(["html", "htm"]);

export const stringToHtmlFilename = (str: string): THtmlFilename => {
  return stringToFilename(str, allowedExtensions, "THtmlFilename");
};
