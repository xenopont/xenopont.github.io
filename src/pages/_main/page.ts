/**
 * This is the main page of the website and should belong to the technical
 * or service pages.
 * That will allow this page to include and process the data of the other pages
 * not making circular dependencies.
 * The service pages like this are always included in the build process.
 * And always public.
 */

import { stringToPath } from "../../converters/string-to-path.js";
import type { TPartialPage } from "../../types/partial-page.js";
import { generateMainPageContent } from "./content.js";

export const MainPage: TPartialPage = {
  content: generateMainPageContent(),
  localApp: `${import.meta.dirname}/app.ts`,
  path: stringToPath(""),
  title: "Dev XL",
};
