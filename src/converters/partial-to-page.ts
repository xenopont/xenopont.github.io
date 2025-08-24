import { defaultAuthor } from "../config/contants.js";
import type { THtmlFilename } from "../types/html-filename.js";
import type { TPage } from "../types/page.js";
import type { TPartialPage } from "../types/partial-page.js";
import type { TPath } from "../types/path.js";
import { stringToHtmlFilename } from "./string-to-html-filename.js";

const defaultFilename: THtmlFilename = stringToHtmlFilename("index.html");

const buildUri = (
  path: TPath | undefined,
  filename: THtmlFilename | undefined,
): string => {
  if (path && filename) {
    return `/${path}/${filename}`;
  }
  if (path) {
    return `/${path}/`;
  }
  if (filename) {
    return `/${filename}`;
  }

  return "/";
};

export const partialToPage = (partial: TPartialPage): TPage => {
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
    socialCardImageUri: partial.socialCardImageUri ?? "",
    summary: partial.summary ?? "",
    uri: buildUri(partial.path, partial.filename),
  };
};
