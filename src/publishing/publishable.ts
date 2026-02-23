import type { THtmlEntity, TSafeText } from "../html/entities.js";
import type { TWebUri } from "../utils/paths.js";

export interface IPublishable {
  content: THtmlEntity[];
  description: TSafeText;
  socialCardImageUri: TWebUri | null;
  title: TSafeText;
  uri: TWebUri;
}
