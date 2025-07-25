declare const __brand: unique symbol;

export type THtmlFile = string & { [__brand]: "THtmlFile" };
