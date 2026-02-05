import { generateId } from "../../utils/generate-id.js";

export const domainName: string =
  // biome-ignore lint/complexity/useLiteralKeys: the source is indexed
  process.env["DOMAIN_NAME"] ?? "localhost:8080";

export const distFolder = "dist";

export const assetsFolder = `assets-${generateId()}`;
export const imagesFolder = `${assetsFolder}/images`;
export const jsFolder = `${assetsFolder}/js`;
export const cssFolder = `${assetsFolder}/styles`;

export const staticImagesFolder = "images";

export const globalAppFile = `${jsFolder}/global.js`;
export const globalCssFile = `${cssFolder}/global.css`;

export const globalAssetsSourceFolder = "src/dynamic-assets";
export const globalAppSourceFile = "src/app.ts";
