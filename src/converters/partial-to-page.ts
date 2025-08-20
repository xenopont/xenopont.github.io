import { defaultAuthor } from "../config/contants.js";
import type { THtmlFilename } from "../types/html-filename.js";
import type { TPage } from "../types/page.js";
import type { TPartialPage } from "../types/partial-page.js";
import { stringToHtmlFilename } from "./string-to-html-filename.js";

const defaultFilename: THtmlFilename = stringToHtmlFilename("index.html");

export const partialToPage = (partial: TPartialPage): TPage => {
  const uri = `/${partial.path}/${[defaultFilename, undefined].indexOf(partial.filename) ? "" : partial.filename}`;
  console.log("URI:", uri, "");

  return {
    ...partial,
    author: partial.author ?? defaultAuthor,
    createdAt: partial.createdAt ?? new Date(),
    excludeGlobalApp: partial.excludeGlobalApp ?? false,
    excludeGlobalChrome: partial.excludeGlobalChrome ?? false,
    excludeGlobalStylesheet: partial.excludeGlobalStylesheet ?? false,
    filename: partial.filename ?? defaultFilename,
    isPublic: partial.isPublic ?? true,
    language: partial.language ?? "en-US",
    localApp: partial.localApp ?? "",
    localStylesheet: partial.localStylesheet ?? "",
    summary: partial.summary ?? "",
    uri,
  };
};
