import type { THtmlFile } from "./html-file.js";
import type { TPath } from "./path.js";

export type TPartialPage = {
  content: string;
  path: TPath;
  title: string;
  // optional
  excludeGlobalApp?: boolean; // false
  excludeGlobalStylesheet?: boolean; // false
  filename?: THtmlFile; // "index.html"
  language?: string; // "en-US"
  localApp?: string; // ""
  localStylesheet?: string; // ""
  isPublic?: boolean; // true
};
