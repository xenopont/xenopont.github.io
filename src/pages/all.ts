import type { TPage } from "../types/page.js";
import { articles } from "./articles.js";
import { blog } from "./blog.js";
import { servicePages } from "./service.js";

export const allPages: TPage[] = [...articles, ...blog, ...servicePages];
