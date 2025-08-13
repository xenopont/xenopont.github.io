import type { THtmlElementMarkup } from "../render/markup.js";
import type { THtmlFilename } from "./html-filename.js";
import type { TPath } from "./path.js";

export type TPage = {
  author: string;
  content: THtmlElementMarkup | THtmlElementMarkup[];
  createdAt: Date;
  excludeGlobalApp: boolean;
  excludeGlobalChrome: boolean;
  excludeGlobalStylesheet: boolean;
  filename: THtmlFilename;
  isPublic: boolean;
  language: string;
  localApp: string;
  localStylesheet: string;
  path: TPath;
  summary: string;
  title: string;
  uri: () => string;
};
