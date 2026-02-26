export const ACTIVE_TEMPLATES = {
  default: "default",
} as const;

export type TTemplateId =
  (typeof ACTIVE_TEMPLATES)[keyof typeof ACTIVE_TEMPLATES];
