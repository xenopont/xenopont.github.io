import type { THtmlFilename } from "./html-filename.js";
import type { TPath } from "./path.js";

export type TPartialPage = {
  content: string;
  path: TPath;
  title: string;
  // optional
  excludeGlobalApp?: boolean; // false
  excludeGlobalStylesheet?: boolean; // false
  filename?: THtmlFilename; // "index.html"
  language?: string; // "en-US"
  localApp?: string; // ""
  localStylesheet?: string; // ""
  isPublic?: boolean; // true
};
