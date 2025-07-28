import type { TImageUri } from "../types/image-uri.js";

type TImageAttributes = {
  src: TImageUri;
  alt: string;
};

export const img = ({ src, alt }: TImageAttributes): string => {
  return `<img src="${src}" alt="${alt}">`;
};
