import type { TPublicFileName } from "./paths.js";

const isValidFileExtension = (
  filename: TPublicFileName,
  allowedExtensions: string[],
): boolean => {
  const extension = filename.split(".").pop();

  return !!(extension && allowedExtensions.includes(extension));
};

declare const __brandTValidHtmlFileName: unique symbol;
export type TValidHtmlFileName = string & {
  [__brandTValidHtmlFileName]: "TValidHtmlFileName";
};
class EInvalidHtmlFileName extends Error {}
export const toValidHtmlFileName = (
  filename: TPublicFileName,
): TValidHtmlFileName => {
  if (!isValidFileExtension(filename, ["html", "htm"])) {
    throw new EInvalidHtmlFileName(`Invalid HTML filename: ${filename}`);
  }

  return filename as unknown as TValidHtmlFileName;
};
