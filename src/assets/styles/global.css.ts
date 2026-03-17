import { cssFileWrapper } from "../../utils/file-wrapper.js";
import type { TWebUri } from "../../utils/paths.js";

export const globalCssUrl: TWebUri = cssFileWrapper.url(
  `${import.meta.dirname}/global.css`,
  "global",
);
