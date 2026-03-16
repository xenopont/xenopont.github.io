import { article, img } from "../../../html/elements.js";
import type { THtmlEntity } from "../../../html/entities.js";
import type { IPublishable } from "../../../publishing/publishable.js";

export const cardBlogPostMedium = (page: IPublishable): THtmlEntity[] => {
  return [
    article({ class: "card-blog-post-medium" }, [
      img({ alt: "", src: page.socialCardImageUri }),
    ]),
  ];
};
