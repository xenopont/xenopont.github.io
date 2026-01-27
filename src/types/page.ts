import type { THtmlElementMarkup } from "../html5/types.js";
import type { THtmlFilename } from "./html-filename.js";
import type { TPath } from "./path.js";

export interface TPage {
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
  socialCardImageUri: string;
  summary: string;
  title: string;
  uri: string;
}
