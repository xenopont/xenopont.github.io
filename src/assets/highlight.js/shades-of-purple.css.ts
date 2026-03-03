import { cssCachedFileWrapper } from "../../utils/file-wrapper.js";
import type { TWebUri } from "../../utils/paths.js";

export const highlightJsShadesOfPurpleCssUrl: TWebUri =
  cssCachedFileWrapper.url(
    `${import.meta.dirname}/shades-of-purple.css`,
    "highlight-js-shades-of-purple",
  );
