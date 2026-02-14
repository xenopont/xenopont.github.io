declare const __brandTHtmlText: unique symbol;
export type THtmlText = string & { [__brandTHtmlText]: "THtmlText" };
