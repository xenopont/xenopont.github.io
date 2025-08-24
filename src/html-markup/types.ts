// TODO: split the type to global, aria-* and data-* attributes
// TODO: limit the type by the allowed for exact element ones
export type THtmlElementAttributes = Record<string, string | undefined>;

declare const __brandTHtmlElementMarkup: unique symbol;
export type THtmlElementMarkup = string & {
  [__brandTHtmlElementMarkup]: "THtmlElementMarkup";
};

export type THtmlElementTagName = string;
