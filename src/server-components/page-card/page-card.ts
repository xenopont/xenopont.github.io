import { div, img } from "../../html5/html-elements.js";
import type { THtmlElementMarkup } from "../../html5/types.js";

interface ICardSource {
  createdAt: Date;
  socialCardImageUri: string;
}
export const pageCard = (page: ICardSource): THtmlElementMarkup => {
  return div([img({ alt: "", src: page.socialCardImageUri })], {
    class: "page-card",
  });
};
