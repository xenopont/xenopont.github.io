import type { TSafeText } from "../html/entities.js";

export interface IPublishable {
  description: TSafeText;
  title: TSafeText;
  uri: string;
}
