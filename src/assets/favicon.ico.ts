import { faviconFileWrapper } from "../utils/file-wrapper.js";
import type { TWebUri } from "../utils/paths.js";

export const faviconUrl: TWebUri = faviconFileWrapper.url(
  `${import.meta.dirname}/favicon.ico`,
  "favicon",
);
