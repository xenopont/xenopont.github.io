export const dateToIso8601 = (date: Date): string =>
  date.toISOString().split("T")[0] || "";
