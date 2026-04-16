import { imageFileWrapper } from "../../../utils/file-wrapper.js";
import type { TWebUri } from "../../../utils/paths.js";

export const topBarTextureImageUrl: TWebUri = imageFileWrapper.url(
  `${import.meta.dirname}/texture.webp`,
  "top-bar-texture",
);
