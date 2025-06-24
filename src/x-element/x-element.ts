type StyleKey = keyof CSSStyleDeclaration;
type StyleValue = string;
type StyleObject = Partial<Record<StyleKey, StyleValue>>;

type AttributeName = Exclude<string, "style">;
type AttributeValue = string | boolean | number | undefined | null;
type NonStyleAttributes = {
  [key in AttributeName]?: AttributeValue;
};
type StyleAttribute = { style?: StyleObject };
type Attributes = {
  [key in string]: key extends "style" ? StyleObject | string : AttributeValue;
};

type Element = HTMLElement | HTMLUnknownElement;
type ChildElement = Element | string;

const attachChildren = (element: Element, children: ChildElement[]): void => {
  for (const child of children) {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  }
};

const applyStyle = (element: Element, style: StyleObject | string): void => {
  if (typeof style === "string") {
    element.style.cssText = style;

    return;
  }
  for (const property in style) {
    if (!Object.prototype.hasOwnProperty.call(style, property)) {
      continue;
    }
    element.style.setProperty(property, style[property] ?? null);
  }
};

const applyAttributes = (element: Element, attributes: Attributes): void => {
  for (const key in attributes) {
    if (!Object.prototype.hasOwnProperty.call(attributes, key)) {
      continue;
    }

    if (key === "style" && attributes[key] !== undefined) {
      applyStyle(element, attributes[key]);
      continue;
    }

    if (
      attributes[key] === false ||
      attributes[key] === undefined ||
      attributes[key] === null
    ) {
      element.removeAttribute(key);
      continue;
    }

    if (attributes[key] === true) {
      element.setAttribute(key, "");
      continue;
    }

    element.setAttribute(key, String(attributes[key]));
  }
};

export const xElement = (
  tagName: string,
  attributes: Attributes = {},
  children: ChildElement[] = [],
): Element => {
  const element = document.createElement(tagName);
  applyAttributes(element, attributes);
  attachChildren(element, children);

  return element;
};
