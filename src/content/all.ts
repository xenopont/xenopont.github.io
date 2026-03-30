import type { IPublishable } from "../publishing/publishable.js";
import { articles } from "./articles/all.js";
import { authors } from "./authors/all.js";
import { blogPosts } from "./blog/all.js";
import { servicePages } from "./service/all.js";

export const pagesToBuild: IPublishable[] = [
  ...articles,
  ...authors,
  ...blogPosts,
  ...servicePages,
];
