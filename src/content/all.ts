import { articles } from "./articles/all.js";
import { blogPosts } from "./blog/all.js";
import { servicePages } from "./service/all.js";

export const content: unknown[] = [...articles, ...blogPosts, ...servicePages];
