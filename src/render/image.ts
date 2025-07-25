import type { TImageUri } from "../types/image-uri.js";

type TImageAttributes = {
  src: TImageUri;
  alt: string;
};

export const image = ({ src, alt }: TImageAttributes): string => {
  return `<img src="${src}" alt="${alt}">`;
};
