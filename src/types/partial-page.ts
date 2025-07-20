import type { TFilename } from "./filename.js";
import type { TPath } from "./path.js";

export type TPartialPage = {
  content: string;
  path: TPath;
  title: string;
  // optional
  excludeGlobalApp?: boolean; // false
  excludeGlobalStylesheet?: boolean; // false
  filename?: TFilename; // index.html
  language?: string; // en-US
  isPublic?: boolean; // true
};
