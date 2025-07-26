import { articles } from "./articles.js";
import { blog } from "./blog.js";
import { servicePages } from "./service.js";

export const allPages = [...articles, ...blog, ...servicePages];
