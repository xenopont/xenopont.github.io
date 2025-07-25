import type { THtmlFilename } from "./html-filename.js";
import type { TPath } from "./path.js";

export type TPage = {
  content: string;
  excludeGlobalApp: boolean;
  excludeGlobalStylesheet: boolean;
  filename: THtmlFilename;
  isPublic: boolean;
  language: string;
  localApp: string;
  localStylesheet: string;
  path: TPath;
  title: string;
};
