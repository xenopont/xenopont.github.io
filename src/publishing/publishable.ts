import type { THtmlEntity, TSafeText } from "../html/entities.js";

export interface IPublishable {
  content: THtmlEntity[];
  description: TSafeText;
  socialCardImageUri: string | null; // TPublicUri
  title: TSafeText;
  uri: string; // TPublicUri
}
