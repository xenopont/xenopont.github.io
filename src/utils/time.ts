export const future = (): Date =>
  new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 50);
export const past = (): Date => new Date("1970-01-01");
export const toIso8601 = (date: Date): string =>
  date.toISOString().split("T")[0] || "";

export const toLongDate = (date: Date, language: string = "en-DE"): string =>
  new Intl.DateTimeFormat(language, { dateStyle: "full" }).format(date);
