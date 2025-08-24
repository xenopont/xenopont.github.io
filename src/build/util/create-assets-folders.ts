import { mkdir } from "node:fs/promises";
import {
  assetsFolder,
  distFolder,
  imagesFolder,
  jsFolder,
  staticImagesFolder,
} from "./constants.js";

export const createAssetsFolders = async (): Promise<void> => {
  await Promise.all([
    mkdir(`${distFolder}/${assetsFolder}`, { recursive: true }),
    mkdir(`${distFolder}/${imagesFolder}`, { recursive: true }),
    mkdir(`${distFolder}/${jsFolder}`, { recursive: true }),
    mkdir(`${distFolder}/${staticImagesFolder}`, { recursive: true }),
  ]);
};
