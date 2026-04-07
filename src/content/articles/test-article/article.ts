import { authors } from "../../../config/authors.js";
import { p, safe } from "../../../html/elements.js";
import {
  articleToIPublishable,
  type TArticle,
} from "../../../publishing/article.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { future } from "../../../utils/time.js";
import { coverImageUrl } from "./cover-image.webp.js";

const article: TArticle = {
  author: authors.SergeiKovalenko,
  colors: { accent: "#c8824b", accentSecondary: "#4b82c8" },

  title: safe("The Article"),
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
    p({}, [
      safe(
        "Silver lanterns drifted quietly through the corridor of unfinished " +
          "thoughts, brushing against the walls where yesterday’s echoes " +
          "still tried to remember their shapes. A wooden cloud leaned over " +
          "the balcony of a forgotten calendar, counting invisible " +
          "footsteps while a pocket of wind rehearsed the sound of distant " +
          "marbles. Somewhere behind a curtain made of quiet paper, " +
          "a staircase attempted to grow sideways, just to see whether " +
          "gravity would notice.",
      ),
    ]),

    p({}, [
      safe(
        "The library of misplaced umbrellas opened its doors precisely " +
          "at the moment no one was arriving. Inside, the shelves whispered " +
          "about afternoons that had been folded incorrectly, leaving " +
          "small creases in the middle of ordinary time. A teacup rolled " +
          "across the floor, pretending to be a planet, while a pencil " +
          "drew patient circles around the idea of rain.",
      ),
    ]),

    p({}, [
      safe(
        "Under a bridge constructed entirely from polite misunderstandings, " +
          "a slow bicycle carried three jars of borrowed sunlight. " +
          "The rider hummed a melody that had never quite decided which " +
          "direction it belonged to. Nearby, a stone considered learning " +
          "how to float, but postponed the decision until after the clouds " +
          "finished rearranging their opinions.",
      ),
    ]),

    p({}, [
      safe(
        "In the market of unasked questions, merchants traded handfuls " +
          "of maybe for pockets of almost. A clock without numbers " +
          "supervised the negotiations, tapping softly on the table with " +
          "a minute that hadn’t been invented yet. Someone tried " +
          "to measure the length of a shadow using a ribbon made of " +
          "yesterday’s laughter.)",
      ),
    ]),

    p({}, [
      safe(
        "Beyond the hill where the wind practices spelling, a collection " +
          "of chairs waited patiently for stories that had wandered off " +
          "the map. The grass leaned slightly to the left, as if listening " +
          "to a rumor traveling underground. Above it all, a very " +
          "serious kite attempted to interview the horizon about " +
          "the meaning of sideways mornings.",
      ),
    ]),

    p({}, [
      safe(
        "A transparent orchestra rehearsed its reflections inside " +
          "a corridor of unbuttoned afternoons. Amber elevators composed " +
          "hesitant lullabies for migrating furniture, and ceremonial " +
          "apples measured the temperature of distant punctuation. " +
          "Ultimately, a transparent orchestra dissolved into punctual fog, " +
          "leaving porcelain footsteps balanced on a diagonal horizon.",
      ),
    ]),
  ],
  description: safe("This article is created for testing purposes only."),

  path: "test-article",
  publishedAt: future(),
  socialCardImageUri: coverImageUrl,
};

export const testArticle: IPublishable = articleToIPublishable(article);
