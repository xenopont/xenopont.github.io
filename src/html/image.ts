import type { TImageFile } from "../types/image-file.js";

type TImageAttributes = {
  src: TImageFile;
  alt?: string;
};

export const image = ({ src, alt }: TImageAttributes): string => {
  return `<img src="${src}" alt="${alt ?? ""}" />`;
};
