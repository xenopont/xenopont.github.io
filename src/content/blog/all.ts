import {
  alreadyPublished,
  type IPublishable,
} from "../../publishing/publishable.js";
import { testBlogPost } from "./test-post/main.js";

export const blogPosts: IPublishable[] = [testBlogPost].filter(
  alreadyPublished(),
);
