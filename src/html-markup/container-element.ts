import { endTag, startTag } from "./base-tags.js";
import type { THtmlElementAttributes, THtmlElementMarkup } from "./types.js";

export type TContainerElementContent =
  | undefined
  | THtmlElementMarkup
  | THtmlElementMarkup[];
export const contentToChildren = (
  content: TContainerElementContent,
): THtmlElementMarkup[] => {
  if (content === undefined) {
    return [];
  }
  if (Array.isArray(content)) {
    return content;
  }
  return [content];
};

type TChildrenSeparator = "" | "\n";
type TContainerHtmlElementCreateParams = {
  tagName: string;
  attributes: THtmlElementAttributes;
  children: THtmlElementMarkup[];
  separator: TChildrenSeparator;
};
export const containerHtmlElement = ({
  tagName,
  attributes,
  children,
  separator,
}: TContainerHtmlElementCreateParams): THtmlElementMarkup => {
  const parts: string[] = [];
  parts.push(startTag(tagName, attributes));
  if (children.length > 0) {
    parts.push(children.join(separator));
  }
  parts.push(endTag(tagName));

  return parts.join(separator) as THtmlElementMarkup;
};
