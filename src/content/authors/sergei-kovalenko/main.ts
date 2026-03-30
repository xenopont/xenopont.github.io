import { authors } from "../../../config/authors.js";
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

const publicDirectory: TPublicDirectory = toPublicDirectory("sergei-kovalenko");
const publicFileName: TPublicFileName = toPublicFileName(
  publicDirectory,
  "index.html",
);

export const sergeiKovalenko: IPublishable = {
  author: authors.SERGEI_KOVALENKO,
  colors: null,
  content: [],
  description: safe("Sergei Kovalenko"),
  language: "en",
  publicDirectory,
  publicFileName: toValidHtmlFileName(publicFileName),
  publishedAt: new Date("2026-03-30"),
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: "article",
  title: safe("Sergei Kovalenko"),
  uri: toWebUri(publicFileName),
  //
};
