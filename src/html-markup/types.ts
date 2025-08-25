// TODO: split the type to global, aria-* and data-* attributes
// TODO: limit the type by the allowed for exact element ones
export type THtmlElementAttributes = Record<string, string | undefined>;

declare const __brandTHtmlElementMarkup: unique symbol;
export type THtmlElementMarkup = string & {
  [__brandTHtmlElementMarkup]: "THtmlElementMarkup";
};

export type THtmlElementTagName = string;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes
type GlobalHtmlElementAttributes = {
  accesskey?: string;
  autocapitalize?: "none" | "off" | "sentences" | "on" | "words" | "characters";
  autocorrect?: "off" | "on" | "";
  autofocues?: null;
  class?: string;
  contenteditable?: "true" | "false" | "plaintext-only";
  [attr: `data-${string}`]: string | undefined;
  dir?: "ltr" | "rtl" | "auto";
  draggable?: "true" | "false" | "auto";
};
