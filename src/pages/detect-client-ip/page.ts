import { stringToPath } from "../../converters/string-to-path.js";
import * as m from "../../render/markup.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const HowToDetectClientIpPage: TPartialPage = {
  content: m.text(""),
  path: stringToPath("how-to-get-the-client-ip-address-in-your-app"),
  title: "How To Get The Client IP Address In Your App",
};
