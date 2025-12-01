import type { THtmlElementAttributes, THtmlElementTagName } from "./types.js";

declare const __brandStartTag: unique symbol;
type TStartTag = string & {
  [__brandStartTag]: "TStartTag";
};

export const startTag = (
  tagName: THtmlElementTagName,
  attributes: THtmlElementAttributes,
): TStartTag => {
  const parts: string[] = [];
  parts.push(`<${tagName}`);
  if (Object.keys(attributes).length > 0) {
    parts.push(" "); // a space to separate the tag name from the attributes
    parts.push(
      Object.keys(attributes)
        .map((k) => `${k}="${attributes[k]}"`)
        .join(" "),
    );
  }
  parts.push(">");

  return parts.join("") as TStartTag;
};

declare const __brandEndTag: unique symbol;
type TEndTag = string & {
  [__brandEndTag]: "TEndTag";
};

export const endTag = (tagName: THtmlElementTagName): TEndTag => {
  return `</${tagName}>` as TEndTag;
};
