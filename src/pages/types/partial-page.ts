import type { TFilename } from "./filename.js";
import type { TPath } from "./path.js";

export type TPartialPage = {
  path: TPath;
  title: string;
  // optional
  excludeGlobalApp?: boolean; // false
  excludeGlobalStylesheet?: boolean; // false
  filename?: TFilename;
  isPublic?: boolean; // true
};
