import type { TPath } from "../types/path.js";
import { logger } from "../utils/logger.js";
import { allowedCharacters } from "./allowed-path-characters.js";

export const stringToPath = (source: string): TPath => {
  const lowercase = source.toLocaleLowerCase();
  if (lowercase !== source) {
    logger.warn(
      `Path "${source}" is not lowercase. Lowercase version: "${lowercase}"`,
    );
  }

  const segments = lowercase.split("/");
  const nonEmptySegments = segments.filter((s) => s.length > 0);
  if (segments.length > 1 && nonEmptySegments.length !== segments.length) {
    logger.warn(`Path "${source}" has empty segments`);
  }

  let invalidCharacterFound = false;
  for (const s of nonEmptySegments) {
    for (const ch of s) {
      if (!allowedCharacters.has(ch)) {
        invalidCharacterFound = true;
        logger.error(`Path "${source}" contains invalid character: "${ch}"`);
      }
    }
  }
  if (invalidCharacterFound) {
    throw new Error(`Cannot safely convert "${source}" to TPath`);
  }

  return nonEmptySegments.join("/") as TPath;
};
