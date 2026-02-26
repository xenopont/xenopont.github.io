import { em, h1, hr, safe } from "../../../html/elements.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import {
  toPublicDirectory,
  toPublicFileName,
  toWebUri,
} from "../../../utils/paths.js";

export const notFound: IPublishable = {
  content: [
    h1({}, [safe("404 Not Found")]),
    hr({}),
    em({}, [safe("The requested content was not found.")]),
  ],
  description: safe("The requested content was not found."),
  language: "en",
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: "default",
  title: safe("404 Not Found"),
  uri: toWebUri(toPublicFileName(toPublicDirectory("/"), "404.html")),
};
