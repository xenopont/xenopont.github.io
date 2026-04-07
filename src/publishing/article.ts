import { AUTHOR_DEFAULT } from "../config/authors.js";
import type { THtmlEntity, TSafeText } from "../html/entities.js";
import { ACTIVE_TEMPLATES } from "../templates/active.js";
import { toValidHtmlFileName } from "../utils/filenames.js";
import {
  pathToWebUri,
  toPublicDirectory,
  toPublicFileName,
} from "../utils/paths.js";
import type { IPublishable } from "./publishable.js";

type ShrinkPublishable = Omit<
  IPublishable,
  "publicDirectory" | "publicFileName" | "uri"
>;

export type TArticle = Partial<ShrinkPublishable> & {
  title: TSafeText;
  content: THtmlEntity[];
  description: TSafeText;

  path: string;
  filename?: string;

  publishedAt: Date;
};

export const articleToIPublishable = (a: TArticle): IPublishable => {
  const publicDirectory = toPublicDirectory(a.path);
  const publicFileName = toValidHtmlFileName(
    toPublicFileName(publicDirectory, a.filename ?? "index.html"),
  );

  return {
    author: a.author ?? AUTHOR_DEFAULT,
    colors: a.colors ?? null,
    content: a.content,
    description: a.description,
    language: a.language ?? "en",
    publicDirectory,
    publicFileName,
    publishedAt: a.publishedAt,
    scripts: a.scripts ?? [],
    socialCardImageUri: a.socialCardImageUri ?? null,
    styles: a.styles ?? [],
    template: a.template ?? ACTIVE_TEMPLATES.article,
    title: a.title,
    uri: pathToWebUri(a.path, a.filename),
  };
};
