import { stringToPath } from "../../converters/string-to-path.js";
import * as m from "../../render/markup.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const HowToDetectClientIpPage: TPartialPage = {
  content: [
    m.p(
      m.text(`Silent whispers collide beneath crimson shadows, weaving fragile
      echoes through tangled realms. Vivid fragments unravel amidst fleeting
      twilight, grasping ephemeral dreams beyond forgotten horizons. Velvet
      murmurs cascade softly, drifting over fractured memories untold.`),
    ),
    m.p(
      m.text(`Beneath shattered starlight, restless spirits wander silent
      corridors, chasing elusive reflections of vanished time. Hollow lanterns
      flicker faintly, casting intricate patterns across weathered stones and
      forgotten paths. Endless whispers resonate faintly, embracing the void
      between moments lost.`),
    ),
    m.p(
      m.text(`Glimmers of forgotten laughter shimmer across faded tapestries,
      entwining with distant sighs of autumn’s breath. Broken melodies dance
      quietly, tracing delicate arcs through shadowed alcoves and hidden
      gardens. Ephemeral visions linger briefly, suspended in the fragile
      balance of dusk.`),
    ),
  ],
  createdAt: new Date("2020-01-17"),
  path: stringToPath("how-to-get-the-client-ip-address-in-your-app"),
  title: "How To Get The Client IP Address In Your App",
};
