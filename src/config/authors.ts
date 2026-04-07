import { pathToWebUri } from "../utils/paths.js";

export const authors = {
  SergeiKovalenko: {
    name: "Sergei Kovalenko",
    url: pathToWebUri("sergei-kovalenko"),
  },
} as const;

export const AUTHOR_DEFAULT = authors.SergeiKovalenko;
