import { safe } from "../../../html/elements.js";
import type { IPublishable } from "../../../publishing/publishable.js";
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
  description: safe("Test Article"),
  language: "en",
  publicDirectory,
  publicFileName,
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: "default",
  title: safe("TEST ARTICLE"),
  uri: toWebUri(publicFileName),
};
