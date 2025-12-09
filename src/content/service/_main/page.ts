/**
 * This is the main page of the website and should belong to the technical
 * or service pages.
 * That will allow this page to include and process the data of the other pages
 * not making circular dependencies.
 * The service pages like this are always included in the build process.
 * And always public.
 */

import { partialToPage } from "../../../converters/partial-to-page.js";
import { stringToPath } from "../../../converters/string-to-path.js";
import type { TPage } from "../../../types/page.js";
import type { TPartialPage } from "../../../types/partial-page.js";
import { generateMainPageContent } from "./content.js";

const partial: TPartialPage = {
  content: generateMainPageContent(),
  excludeGlobalApp: true,
  excludeGlobalChrome: true,
  localApp: `${import.meta.dirname}/app.ts`,
  path: stringToPath(""),
  title: "Dev XL",
};

export const mainPage: TPage = partialToPage(partial);
