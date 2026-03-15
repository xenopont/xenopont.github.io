import { domainName } from "../config/constants.js";
import type { THtmlEntity, TSafeText } from "../html/entities.js";
import type { TTemplateId } from "../templates/active.js";
import type { TValidHtmlFileName } from "../utils/filenames.js";
import type { TPublicDirectory, TWebUri } from "../utils/paths.js";

interface IAuthor {
  name: string;
  url: string; // todo make valid local or external URL/TWebUri
}

export interface IPublishable {
  author: IAuthor;
  content: THtmlEntity[];
  description: TSafeText;
  language: string; // BCP 47: "en", "en-GB", ...
  publicDirectory: TPublicDirectory;
  publicFileName: TValidHtmlFileName;
  publishedAt: Date;
  scripts: TWebUri[];
  socialCardImageUri: TWebUri | null;
  styles: TWebUri[];
  template: TTemplateId;
  title: TSafeText;
  uri: TWebUri;
}

type TFilterFunction<T> = (item: T) => boolean;
const currentDate: Date = new Date();
export const alreadyPublished = (): TFilterFunction<IPublishable> => {
  return domainName.startsWith("localhost")
    ? () => true
    : (item: IPublishable) => item.publishedAt < currentDate;
};
