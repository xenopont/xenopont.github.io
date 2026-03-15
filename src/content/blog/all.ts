import {
  alreadyPublished,
  type IPublishable,
} from "../../publishing/publishable.js";

export const blogPosts: IPublishable[] = [].filter(alreadyPublished());
