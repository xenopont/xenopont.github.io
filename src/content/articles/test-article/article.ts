import { safe } from "../../../html/elements.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { toValidHtmlFileName } from "../../../utils/filenames.js";
import {
  type TPublicDirectory,
  type TPublicFileName,
  toPublicDirectory,
  toPublicFileName,
  toWebUri,
} from "../../../utils/paths.js";

const publicDirectory: TPublicDirectory = toPublicDirectory("test-article");
const publicFileName: TPublicFileName = toPublicFileName(
  publicDirectory,
  "index.html",
);

export const testArticle: IPublishable = {
  content: [],
  description: safe("Test article description"),
  language: "en",
  publicDirectory,
  publicFileName: toValidHtmlFileName(publicFileName),
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: "article",
  title: safe("Test Article Title"),
  uri: toWebUri(publicFileName),
};
