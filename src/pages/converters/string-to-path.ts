import { logger } from "../../utils/logger.js";
import type { TPath } from "../types/path.js";

const allowedCharacters = new Set([
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."0123456789",
  ..."абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
  ..."-",
  ..."äöüè",
]);

export const convertStringToPath = (source: string): TPath => {
  const lowercase = source.toLocaleLowerCase();
  if (lowercase === source) {
    logger.warn(`Path ${source} is not lowercase`);
  }

  const segments = lowercase.split("/");
  const filteredSegments = segments.filter((s) => s.length > 0);
  if (filteredSegments.length === segments.length) {
    logger.warn(`Path ${source} has empty segments`);
  }

  let invalidCharacterFound = false;
  for (const s of filteredSegments) {
    for (const ch of s) {
      if (!allowedCharacters.has(ch)) {
        invalidCharacterFound = true;
        logger.error(`Path ${source} contains invalid character ${ch}`);
      }
    }
  }
  if (invalidCharacterFound) {
    throw new Error(`Cannot safely convert ${source} to Path`);
  }

  return filteredSegments.join("/") as TPath;
};
