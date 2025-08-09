import type { THtmlElementMarkup } from "../render/markup.js";
import type { THtmlFilename } from "./html-filename.js";
import type { TPath } from "./path.js";

export type TPartialPage = {
  content: THtmlElementMarkup | THtmlElementMarkup[];
  path: TPath;
  title: string;
  // optional
  author?: string;
  createdAt?: Date;
  excludeGlobalApp?: boolean; // false
  excludeGlobalChrome?: boolean; // false
  excludeGlobalStylesheet?: boolean; // false
  filename?: THtmlFilename; // "index.html"
  language?: string; // "en-US"
  localApp?: string; // ""
  localStylesheet?: string; // ""
  isPublic?: boolean; // true
  summary?: string;
};
