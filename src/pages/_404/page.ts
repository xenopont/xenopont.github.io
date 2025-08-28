/**
 * This is the 404 error page of the website and should belong to the technical
 * or service pages.
 * That will allow this page to include and process the data of the other pages
 * not making circular dependencies.
 * The service pages like this are always included in the build process.
 * And always public.
 */

import { stringToHtmlFilename } from "../../converters/string-to-html-filename.js";
import { stringToPath } from "../../converters/string-to-path.js";
import * as m from "../../html-markup/html-elements.js";
import * as s from "../../html-markup/non-html-elements.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const page404: TPartialPage = {
  content: m.div(
    [m.h1(s.safe("Not Found")), m.a(s.safe("Main Page"), { href: "/" })],
    {
      class: "page-404",
    },
  ),
  excludeGlobalApp: true,
  excludeGlobalChrome: true,
  filename: stringToHtmlFilename("404.html"),
  path: stringToPath(""),
  title: "Not Found",
};
