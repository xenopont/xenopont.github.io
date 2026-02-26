import type { THtmlEntity, TSafeText } from "../html/entities.js";
import type { TTemplateId } from "../templates/active.js";
import type { TWebUri } from "../utils/paths.js";

export interface IPublishable {
  content: THtmlEntity[];
  description: TSafeText;
  language: string; // BCP 47: "en", "en-GB", ...
  scripts: TWebUri[];
  socialCardImageUri: TWebUri | null;
  styles: TWebUri[];
  template: TTemplateId;
  title: TSafeText;
  uri: TWebUri;
}
