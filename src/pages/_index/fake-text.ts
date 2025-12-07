import { br, div, h1, p } from "../../html5/html-elements.js";
import { safe } from "../../html5/non-html-elements.js";
import type { THtmlElementMarkup } from "../../html5/types.js";

export const fakeText: THtmlElementMarkup = div(
  [
    h1(safe("Fake Text")),
    p(
      safe(
        "The lantern murmured softly as the catalog of frozen umbrellas drifted beneath the cautious staircase, pretending" +
          " to understand the quiet hesitation of velvet engines.",
      ),
    ),
    p(
      safe(
        "During the afternoon’s polite turbulence, scattered harmonies folded themselves around the obedient windows, insisting" +
          " that every arithmetic whisper must be painted in circular confidence.",
      ),
    ),
    safe(
      "A bundle of restless teaspoons negotiated with the patient horizon, asking whether translucent errands could ever" +
        " outweigh the trembling comfort of elastic parades.",
    ),
    br(),
    safe(
      "The meadow’s reversible echo balanced on a reluctant shoelace, observing how ceremonial notebooks adjusted their" +
        " expectations under a drizzle of voluntary geometry.",
    ),
    br(),
    safe(
      "Whenever the punctual comet applauded the distant wardrobe, a chorus of logical marbles assembled to debate the" +
        " sentimental temperature of drifting stairwells.",
    ),
    br(),
    safe(
      "In a deliberate moment of sideways clarity, ornamental pistons braided their modest reflections while the afternoon" +
        " clock rehearsed its impression of a discreet waterfall.",
    ),
    br(),
    safe(
      "The diplomatic cactus surveyed the spiral balcony, convinced that modest thunderstorms would eventually translate the" +
        " folklore of copper sunsets into patient origami.",
    ),
    br(),
    safe(
      "Across the lantern-lit corridor, invertible feathers hummed politely, ensuring the contemplative teapots never forgot" +
        " the fragile uncertainty of migrating doorbells.",
    ),
    br(),
    safe(
      "Several prudent pillows considered the ethical aroma of imaginary bridges, wondering if reversible anchors might" +
        " finally harmonize their untidy expectations.",
    ),
    br(),
    safe(
      "At the edge of the transparent courtyard, subdued violins practiced their diagonal footsteps, suspicious of the" +
        " radiant luggage clinging to evaporating milestones.",
    ),
    br(),
    safe(
      "The circular breeze, intent on diplomatic hesitation, escorted a parliament of wandering shoeboxes that wished to" +
        " unravel the hypothetical grammar of quiet ladders.",
    ),
    br(),
    safe(
      "Between the murmuring fences, theoretical pears argued respectfully with rotating lanterns, each convinced that the" +
        " texture of forgotten staircases required seasonal calibration.",
    ),
    br(),
    safe(
      "Under the optional moonlight, hesitant constellations negotiated silently with crystalline door hinges, hoping to" +
        " preserve the ceremonial bewilderment of untamed harmonicas.",
    ),
    br(),
  ],
  { class: "fake-text" },
);
