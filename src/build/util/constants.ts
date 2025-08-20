import { generateId } from "../../utils/generate-id.js";

// biome-ignore lint/complexity/useLiteralKeys: the source is indexed
export const domainName = process.env["DOMAIN_NAME"] ?? "localhost:8080";

export const distFolder = "dist";

export const assetsFolder = `assets-${generateId()}`;
export const imagesFolder = `${assetsFolder}/images`;
export const jsFolder = `${assetsFolder}/js`;
export const cssFolder = `${assetsFolder}/styles`;

export const globalAppFile = `${jsFolder}/global.js`;
export const globalCssFile = `${cssFolder}/global.css`;

export const globalAssetsSourceFolder = "src/assets";
export const globalAppSourceFile = "src/app.ts";
