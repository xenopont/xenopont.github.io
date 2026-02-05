/**
 * We do not support strict typing for the HTML element attributes due to
 * the cost of maintenance.
 */
export type THtmlElementAttributes = Record<string, string | undefined>;

declare const __brandTHtmlElementMarkup: unique symbol;
export type THtmlElementMarkup = string & {
  [__brandTHtmlElementMarkup]: "THtmlElementMarkup";
};

export type THtmlElementTagName = string;
