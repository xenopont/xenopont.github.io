import type { TPage } from "../types/page.js";
import { articles } from "./articles/all.js";
import { blogPosts } from "./blog/all.js";
import { servicePages } from "./service/all.js";

export const allPages: TPage[] = [...articles, ...blogPosts, ...servicePages];
