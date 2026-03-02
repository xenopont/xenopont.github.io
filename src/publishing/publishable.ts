import type { THtmlEntity, TSafeText } from "../html/entities.js";
import type { TTemplateId } from "../templates/active.js";
import type { TValidHtmlFileName } from "../utils/filenames.js";
import type { TPublicDirectory, TWebUri } from "../utils/paths.js";

export interface IPublishable {
  content: THtmlEntity[];
  description: TSafeText;
  language: string; // BCP 47: "en", "en-GB", ...
  publicDirectory: TPublicDirectory;
  publicFileName: TValidHtmlFileName;
  scripts: TWebUri[];
  socialCardImageUri: TWebUri | null;
  styles: TWebUri[];
  template: TTemplateId;
  title: TSafeText;
  uri: TWebUri;
}
