declare const __brand: unique symbol;

export type TImageUri = string & { [__brand]: "TImageUri" };
