import { safe } from "../../../html/elements.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { baseUrl } from "../../../utils/base-url.js";
import { toValidHtmlFileName } from "../../../utils/filenames.js";
import {
  type TPublicDirectory,
  type TPublicFileName,
  toPublicDirectory,
  toPublicFileName,
  toWebUri,
} from "../../../utils/paths.js";
import { past } from "../../../utils/time.js";
import { content } from "./content.js";

const directory: TPublicDirectory = toPublicDirectory("");
const publicFileName: TPublicFileName = toPublicFileName(
  directory,
  "index.html",
);

export const homePage: IPublishable = {
  author: {
    name: "Sergei Kovalenko",
    url: `${baseUrl}/sergei-kovalenko/`,
  },
  colorAccent: "default",
  content,
  description: safe("Home Page"),
  language: "en",
  publicDirectory: directory,
  publicFileName: toValidHtmlFileName(publicFileName),
  publishedAt: past(),
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: "home-page",
  title: safe("Home Page"),
  uri: toWebUri(publicFileName),
};
