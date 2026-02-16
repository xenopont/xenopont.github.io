import { generateId } from "../utils/generate-id.js";

export const assetsSource = "src/assets";
export const staticAssetsSource = `${assetsSource}/static`;
export const dynamicAssetsSource = `${assetsSource}/dynamic`;

export const destinationRoot = "dist";
export const dynamicAssetsDestination = `${destinationRoot}/assets-${generateId()}`;
export const imagesDestination = `${destinationRoot}/images`;
