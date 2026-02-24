export const AVAILABLE_TEMPLATES = {
  default: "default",
} as const;

export type TAvailableTemplate =
  (typeof AVAILABLE_TEMPLATES)[keyof typeof AVAILABLE_TEMPLATES];
