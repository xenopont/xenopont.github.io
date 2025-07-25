import type { THtmlFile } from "./html-file.js";
import type { TPath } from "./path.js";

export type TPage = {
  content: string;
  excludeGlobalApp: boolean;
  excludeGlobalStylesheet: boolean;
  filename: THtmlFile;
  isPublic: boolean;
  language: string;
  localApp: string;
  localStylesheet: string;
  path: TPath;
  title: string;
};
