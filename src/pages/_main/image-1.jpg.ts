import { filenameToImageUri } from "../../converters/filename-to-image-uri.js";
import type { TImageUri } from "../../types/image-uri.js";

export const image1: TImageUri = filenameToImageUri(
  `${import.meta.dirname}/image-1.jpg`,
);
