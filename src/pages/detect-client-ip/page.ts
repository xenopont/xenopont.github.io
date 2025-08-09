import { stringToPath } from "../../converters/string-to-path.js";
import * as m from "../../render/markup.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const HowToDetectClientIpPage: TPartialPage = {
  content: m.text(""),
  createdAt: new Date("2020-01-17"),
  path: stringToPath("how-to-get-the-client-ip-address-in-your-app"),
  title: "How To Get The Client IP Address In Your App",
};
