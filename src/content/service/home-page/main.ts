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

const directory: TPublicDirectory = toPublicDirectory("");
const publicFileName: TPublicFileName = toPublicFileName(
  directory,
  "index.html",
);

export const homePage: IPublishable = {
  content: [],
  description: safe("Home Page"),
  language: "en",
  publicDirectory: directory,
  publicFileName: toValidHtmlFileName(publicFileName),
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: "default",
  title: safe("Home Page"),
  uri: toWebUri(publicFileName),
};
