import { startTag } from "./base-tags.js";
import type { THtmlElementAttributes, THtmlElementMarkup } from "./types.js";

type TVoidElementTagName =
  | "area"
  | "base"
  | "br"
  | "col"
  | "embed"
  | "hr"
  | "img"
  | "input"
  | "link"
  | "meta"
  | "source"
  | "track"
  | "wbr";
type TVoidHtmlElementCreateParams = {
  tagName: TVoidElementTagName;
  attributes: THtmlElementAttributes;
};

export const voidHtmlElement = ({
  tagName,
  attributes,
}: TVoidHtmlElementCreateParams): THtmlElementMarkup => {
  return startTag(tagName, attributes) as unknown as THtmlElementMarkup;
};
