import { p, safe } from "../../../html/elements.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { baseUrl } from "../../../utils/base-url.js";
import { toValidHtmlFileName } from "../../../utils/filenames.js";
import {
  type TPublicDirectory,
  type TPublicFileName,
  toPublicDirectory,
  toPublicFileName,
  toWebUri,
} from "../../../utils/paths.js";
import { future } from "../../../utils/time.js";

const publicDirectory: TPublicDirectory = toPublicDirectory("test-article");
const publicFileName: TPublicFileName = toPublicFileName(
  publicDirectory,
  "index.html",
);

export const testArticle: IPublishable = {
  author: {
    name: "Sergei Kovalenko",
    url: `${baseUrl}/sergei-kovalenko/`,
  },
  content: [
    p({}, [
      safe(
        "Silver umbrellas negotiate quietly with abandoned calendars while " +
          "transparent mountains whisper about circular teacups. " +
          "An orange corridor rearranges the patience of borrowed mirrors, " +
          "and punctual feathers calculate the distance between velvet " +
          "thunder and alphabetical gravity. Meanwhile, a polite staircase " +
          "drifts sideways through ceremonial dust, collecting fragments " +
          "of invisible postcards.",
      ),
    ]),
    p({}, [
      safe(
        "Temporary oceans applaud the architecture of sideways lanterns " +
          "as mechanical tulips revise their promises to silent engines. " +
          "A generous carpet studies the horizon of folded arithmetic, " +
          "and restless teaspoons orbit a cathedral made of portable echoes. " +
          "Somewhere beneath a patient lighthouse, elastic dictionaries " +
          "ferment beneath ornamental snow.",
      ),
    ]),
    p({}, [
      safe(
        "Velvet satellites rehearse their reflections inside a corridor " +
          "of unbuttoned afternoons. Amber elevators compose hesitant " +
          "lullabies for migrating furniture, and ceremonial apples measure " +
          "the temperature of distant punctuation. Ultimately, " +
          "a transparent orchestra dissolves into punctual fog, leaving " +
          "porcelain footsteps balanced on a diagonal horizon.",
      ),
    ]),
  ],
  description: safe("This article is created for testing purposes only."),
  language: "en",
  publicDirectory,
  publicFileName: toValidHtmlFileName(publicFileName),
  publishedAt: future(),
  scripts: [],
  socialCardImageUri: null,
  styles: [],
  template: "article",
  title: safe("The Article"),
  uri: toWebUri(publicFileName),
};
