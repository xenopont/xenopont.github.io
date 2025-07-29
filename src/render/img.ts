/**
 * The img tag is special in that manner that its `src` attribute accepts
 * the value of the TImageUri type, which is responsible for copying the image
 * to the `assets` folder. This dependency should not exist in the common
 * markup file.
 */

import type { TImageUri } from "../types/image-uri.js";

type TImageAttributes = {
  src: TImageUri;
  alt: string;
};

export const img = ({ src, alt }: TImageAttributes): string => {
  return `<img src="${src}" alt="${alt}">`;
};
