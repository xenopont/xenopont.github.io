import { generateId } from "../../utils/generate-id.js";

export const distFolder = "dist";

export const assetsFolder = `assets-${generateId()}`;
export const imagesFolder = `${assetsFolder}/images`;
export const jsFolder = `${assetsFolder}/js`;
export const cssFolder = `${assetsFolder}/styles`;

export const globalAppFile = `${jsFolder}/global.js`;
export const globalCssFile = `${cssFolder}/global.css`;

export const globalAssetsSourceFolder = "src/assets";
export const globalAppSourceFile = "src/app.ts";
