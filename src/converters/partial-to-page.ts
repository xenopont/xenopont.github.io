import type { TPage } from "../types/page.js";
import type { TPartialPage } from "../types/partial-page.js";
import { stringToHtmlFilename } from "./string-to-html-filename.js";

export const convertPartialToPage = (partial: TPartialPage): TPage => {
  return {
    ...partial,
    excludeGlobalApp: partial.excludeGlobalApp ?? false,
    excludeGlobalStylesheet: partial.excludeGlobalStylesheet ?? false,
    filename: partial.filename ?? stringToHtmlFilename("index.html"),
    isPublic: partial.isPublic ?? true,
    language: partial.language ?? "en-US",
    localApp: partial.localApp ?? "",
    localStylesheet: partial.localStylesheet ?? "",
  };
};
