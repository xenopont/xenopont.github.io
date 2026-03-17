import type { TPageColors } from "../publishing/publishable.js";

export const defaultColors = {
  accent: "#4488ff",
  accentSecondary: "#ff4488",
};

export const accentColor = (pageColors: TPageColors | null): string =>
  pageColors?.accent ?? defaultColors.accent;
