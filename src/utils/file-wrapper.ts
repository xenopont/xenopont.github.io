import { assetsFolder } from "../config/constants.js";
import { copyQueue } from "./copy-queue.js";
import {
  type TPublicDirectory,
  type TPublicSubPath,
  type TWebUri,
  toLocalFileName,
  toPublicDirectory,
  toPublicFileName,
  toPublicPathPiece,
  toPublicSubPath,
  toWebUri,
} from "./paths.js";

class EInvalidFilenameExtension extends Error {}

interface IFileWrapper {
  /**
   * Adds the local file to the copy queue and returns its web URL.
   *
   * @param filename A file name, must be inside the `/src` folder.
   * @param basename A base filename visible to the User agent. The extension
   *   will be added from the `filename` automatically. Must be a valid
   *   public file name.
   *
   * @returns A URL of the file that can be used in the webpage code so that
   *   the User agent can access it from the Web.
   *
   * @example
   * ```ts
   * // my-image.webp.ts
   * import { imageFileWrapper } from "../utils/file-wrapper.js";
   *
   * export const myImageUrl = ImageFileWrapper.url(
   *   `${import.media.dirname}/my-image.webp`,
   *   "my-article-fig-1"
   * );
   * // https://example.com/images/my-article-fig-1.webp
   * ```
   * ```ts
   * // my-article.ts
   * import { myImageUrl } from "./my-image.webp.ts";
   *
   * const img = img({src: myImageUrl, alt: "Fig. 1"});
   *
   * // <img src="https://example.com/images/my-article-fig-1.webp" alt="Fig. 1">
   * ```
   */
  url(filename: string, basename: string): TWebUri;
}

class TFileWrapper implements IFileWrapper {
  private readonly destination: TPublicDirectory;
  private readonly extensionList: string;

  constructor(
    private readonly fileType: string,
    private readonly allowedExtensions: Set<string>,
    relativePublicPath: TPublicSubPath,
  ) {
    this.extensionList = [...this.allowedExtensions].join(", ");
    this.destination = toPublicDirectory(relativePublicPath);
  }

  public url(filename: string, basename: string): TWebUri {
    const source = toLocalFileName(filename);
    const destBase = toPublicPathPiece(basename);
    const extension = toPublicPathPiece(
      source.split(".").pop()?.toLowerCase() || "",
    );
    if (!extension || !this.allowedExtensions.has(extension)) {
      throw new EInvalidFilenameExtension(
        `❌ Cannot safely convert ${source} to a file of type ${this.fileType}.\n` +
          `Allowed extensions are: ${this.extensionList}`,
      );
    }

    const publicFilename = toPublicFileName(
      this.destination,
      `${destBase}.${extension}`,
    );
    copyQueue.add(source, publicFilename);

    return toWebUri(publicFilename);
  }
}

export const cssFileWrapper: TFileWrapper = new TFileWrapper(
  "css",
  new Set(["css"]),
  toPublicSubPath(`${assetsFolder}/css`),
);

export const imageFileWrapper: TFileWrapper = new TFileWrapper(
  "image",
  new Set(["gif", "jpeg", "jpg", "png", "webp"]),
  toPublicSubPath("images"),
);

export const faviconFileWrapper: TFileWrapper = new TFileWrapper(
  "favicon",
  new Set(["ico"]),
  toPublicSubPath(""),
);
