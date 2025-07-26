/**
 * This is the 404 error page of the website and should belong to the technical
 * or service pages.
 * That will allow this page to include and process the data of the other pages
 * not making circular dependencies.
 * The service pages like this are always included in the build process.
 * And always public.
 */

import { stringToHtmlFilename } from "../../converters/string-to-html-filename.js";
import { convertStringToPath } from "../../converters/string-to-path.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const page404: TPartialPage = {
  content: "Not Found",
  excludeGlobalApp: true,
  filename: stringToHtmlFilename("404.html"),
  path: convertStringToPath(""),
  title: "Not Found",
};
