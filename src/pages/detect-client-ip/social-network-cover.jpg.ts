import { filenameToImageUri } from "../../converters/filename-to-image-uri.js";
import type { TImageUri } from "../../types/image-uri.js";

export const socialCardImageUri: TImageUri = filenameToImageUri(
  `${import.meta.dirname}/social-network-cover.jpg`,
  "detect-client-ip",
);
