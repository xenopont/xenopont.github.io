import {
  alreadyPublished,
  type IPublishable,
} from "../../publishing/publishable.js";
import { notFound } from "./_404/not-found.js";
import { homePage } from "./home-page/main.js";

export const servicePages: IPublishable[] = [homePage, notFound].filter(
  alreadyPublished(),
);
