import { article } from "../../../html/elements.js";
import type { THtmlEntity } from "../../../html/entities.js";
import type { IPublishable } from "../../../publishing/publishable.js";

export const cardArticleMedium = (page: IPublishable): THtmlEntity[] => {
  return [article({}, [])];
};
