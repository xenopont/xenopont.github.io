import { authors } from "../../../config/authors.js";
import { safe } from "../../../html/elements.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { ACTIVE_TEMPLATES } from "../../../templates/active.js";
import { toValidHtmlFileName } from "../../../utils/filenames.js";
import {
  pathToWebUri,
  type TPublicDirectory,
  toPublicDirectory,
  toPublicFileName,
} from "../../../utils/paths.js";

const publicDirectory: TPublicDirectory = toPublicDirectory("blog/test-post");

export const testBlogPost: IPublishable = {
  author: authors.SERGEI_KOVALENKO,
  colors: null,
  content: [],
  description: safe(""),
  language: "en",
  publicDirectory,
  publicFileName: toValidHtmlFileName(
    toPublicFileName(publicDirectory, "index.html"),
  ),
  publishedAt: new Date("2026-03-31"),
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: ACTIVE_TEMPLATES.article,
  title: safe("Test Blog Post"),
  uri: pathToWebUri("blog/test-post"),
};
