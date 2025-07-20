declare const __brand: unique symbol;

export type TFilename = string & { [__brand]: "TFilename" };
