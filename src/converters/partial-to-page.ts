import type { TPage } from "../types/page.js";
import type { TPartialPage } from "../types/partial-page.js";
import { convertStringToHtmlFile } from "./string-to-html-file.js";

export const convertPartialToPage = (partial: TPartialPage): TPage => {
  return {
    ...partial,
    excludeGlobalApp: partial.excludeGlobalApp ?? false,
    excludeGlobalStylesheet: partial.excludeGlobalStylesheet ?? false,
    filename: partial.filename ?? convertStringToHtmlFile("index.html"),
    isPublic: partial.isPublic ?? true,
    language: partial.language ?? "en-US",
    localApp: partial.localApp ?? "",
    localStylesheet: partial.localStylesheet ?? "",
  };
};
