import { imageFileWrapper } from "../../../utils/file-wrapper.js";
import type { TWebUri } from "../../../utils/paths.js";

export const swirlImageUrl: TWebUri = imageFileWrapper.url(
  `${import.meta.dirname}/swirls.webp`,
  "swirls",
);
