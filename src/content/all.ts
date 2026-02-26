import type { IPublishable } from "../publishing/publishable.js";
import { articles } from "./articles/all.js";
import { blogPosts } from "./blog/all.js";
import { servicePages } from "./service/all.js";

export const content: IPublishable[] = [
  ...articles,
  ...blogPosts,
  ...servicePages,
];
