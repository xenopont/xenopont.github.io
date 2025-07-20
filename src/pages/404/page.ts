import { convertStringToFilename } from "../converters/string-to-filename.js";
import { convertStringToPath } from "../converters/string-to-path.js";
import type { TPartialPage } from "../types/partial-page.js";

export const page404: TPartialPage = {
  excludeGlobalApp: true,
  filename: convertStringToFilename("404.html"),
  path: convertStringToPath(""),
  title: "Not Found",
};
