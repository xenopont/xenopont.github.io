import type { TFilename } from "./filename.js";
import type { TPath } from "./path.js";

export type TPage = {
  content: string;
  excludeGlobalApp: boolean;
  excludeGlobalStylesheet: boolean;
  filename: TFilename;
  isPublic: boolean;
  language: string;
  localApp: string;
  localStylesheet: string;
  path: TPath;
  title: string;
};
