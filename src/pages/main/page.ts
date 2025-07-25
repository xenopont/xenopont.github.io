import { convertStringToPath } from "../../converters/string-to-path.js";
import { image } from "../../render/image.js";
import type { TPartialPage } from "../../types/partial-page.js";
import { image1 } from "./image-1.jpg.js";

export const MainPage: TPartialPage = {
  content: `<h1>Dev XL</h1>
  ${image({ src: image1, alt: "test image number one" })}`,
  localApp: `${import.meta.dirname}/app.ts`,
  path: convertStringToPath(""),
  title: "Dev XL",
};
