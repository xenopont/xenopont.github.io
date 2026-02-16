import type { TWebUri } from "../config/paths.js";
import type { THtmlEntity, TSafeText } from "../html/entities.js";

export interface IPublishable {
  content: THtmlEntity[];
  description: TSafeText;
  socialCardImageUri: TWebUri | null;
  title: TSafeText;
  uri: TWebUri;
}
