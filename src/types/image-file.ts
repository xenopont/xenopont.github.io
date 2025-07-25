declare const __brand: unique symbol;

export type TImageFile = string & { [__brand]: "TImageFile" };
