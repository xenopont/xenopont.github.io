import type { TFilename } from "./filename.js";
import type { TPath } from "./path.js";

export type TPage = {
  excludeGlobalApp: boolean;
  excludeGlobalStylesheet: boolean;
  filename: TFilename;
  isPublic: boolean;
  path: TPath;
  title: string;
};
