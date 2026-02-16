/**
 * There are the following possible paths in the app:
 * 1. TLocalFile: <...>/src/content/my-page/my-image.webp
 *    Validate, that file exists.
 * 2. TPublicDirectory: ./dist/images
 * 3. TPublicFile: ./dist/images/my-image.webp
 * 4. TWebUri: /images/my-image.webp
 *    Validate, that contains only allowed characters, properly structured.
 */

declare const __brandTLocalFile: unique symbol;
type TLocalFile = string & { [__brandTLocalFile]: "TLocalFile" };

declare const __brandTPublicDirectory: unique symbol;
type TPublicDirectory = string & {
  [__brandTPublicDirectory]: "TPublicDirectory";
};

declare const __brandTPublicFile: unique symbol;
type TPublicFile = string & { [__brandTPublicFile]: "TPublicFile" };

declare const __brandTWebUri: unique symbol;
export type TWebUri = string & { [__brandTWebUri]: "TWebUri" };
