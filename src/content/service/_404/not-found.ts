import { em, h1, hr, safe } from "../../../html/elements.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import {
  type TPublicDirectory,
  type TPublicFileName,
  toPublicDirectory,
  toPublicFileName,
  toWebUri,
} from "../../../utils/paths.js";

const publicDirectory: TPublicDirectory = toPublicDirectory("/");
const publicFileName: TPublicFileName = toPublicFileName(
  publicDirectory,
  "404.html",
);

export const notFound: IPublishable = {
  content: [
    h1({}, [safe("404 Not Found")]),
    hr({}),
    em({}, [safe("The requested content was not found.")]),
  ],
  description: safe("The requested content was not found."),
  language: "en",
  publicDirectory,
  publicFileName,
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: "default",
  title: safe("404 Not Found"),
  uri: toWebUri(publicFileName),
};
