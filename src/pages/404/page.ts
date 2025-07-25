import { convertStringToHtmlFile } from "../../converters/string-to-html-file.js";
import { convertStringToPath } from "../../converters/string-to-path.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const page404: TPartialPage = {
  content: "Not Found",
  excludeGlobalApp: true,
  filename: convertStringToHtmlFile("404.html"),
  path: convertStringToPath(""),
  title: "Not Found",
};
