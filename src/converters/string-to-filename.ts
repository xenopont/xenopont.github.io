import { allowedCharacters } from "./allowed-path-characters.js";

export const stringToFilename = <T>(
  str: string,
  allowedExtensions: Set<string>,
  fileTypeName: string,
): T => {
  const extension = str.split(".").pop();
  if (!extension || !allowedExtensions.has(extension)) {
    throw new Error(
      `❌ Cannot safely convert ${str} to a filename of type ${fileTypeName}.
      Allowed extensions are: ${[...allowedExtensions].join(", ")}`,
    );
  }
  for (const ch of str) {
    if (!allowedCharacters.has(ch) && ch !== ".") {
      throw new Error(
        `❌ String "${str}" contains invalid character: "${ch}" and cannot represent a file.`,
      );
    }
  }

  return str as T;
};
