import { safe } from "../../../html/elements.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import {
  toPublicDirectory,
  toPublicFileName,
  toWebUri,
} from "../../../utils/paths.js";

export const homePage: IPublishable = {
  content: [],
  description: safe("Home Page"),
  language: "en",
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: "default",
  title: safe("Home Page"),
  uri: toWebUri(toPublicFileName(toPublicDirectory(""), "index.html")),
};
