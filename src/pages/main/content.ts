import { image } from "../../render/image.js";
import { image1 } from "./image-1.jpg.js";

export const generateMainPageContent = (): string => {
  return `<h1>Dev XL</h1>
  ${image({ src: image1, alt: "test image number one" })}`;
};
