declare const __brand: unique symbol;

export type TPath = string & { [__brand]: "TPath" };
