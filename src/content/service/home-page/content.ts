import type { IHtmlElement, THtmlEntity } from "../../../html/entities.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { articles } from "../../articles/all.js";
import { blogPosts } from "../../blog/all.js";
import { cardArticleLarge } from "./card-article-large.js";
import { cardArticleMedium } from "./card-article-medium.js";
import { cardBlogPostMedium } from "./card-blog-post-medium.js";

const byPublishedAt = (a: IPublishable, b: IPublishable): number =>
  a.publishedAt > b.publishedAt ? -1 : 1;

const buildFeed = (
  allArticles: IPublishable[],
  allBlogPosts: IPublishable[],
): IHtmlElement[] => {
  const feed: THtmlEntity[] = [];

  // copy elements, keep the source unmutated
  const a = allArticles.toSorted(byPublishedAt);
  const b = allBlogPosts.toSorted(byPublishedAt);

  let article = a.shift();
  let blogPost = b.shift();
  let card: THtmlEntity[] | undefined;

  // always insert the latest article first
  if (article) {
    feed.push(cardArticleLarge(article));
    article = a.shift();
  }

  let mediumArticleCardCount = 0;
  const mediumArticleCardMax = 5;

  let blogPostCount = 0;
  const blogPostMax = 3;

  while (article || blogPost) {
    card = undefined;
    if (article && blogPost) {
      // a fresh article always go first
      if (article.publishedAt >= blogPost.publishedAt) {
        card =
          mediumArticleCardCount > mediumArticleCardMax
            ? cardArticleLarge(article)
            : cardArticleMedium(article);
        article = a.shift();
        mediumArticleCardCount++;
        if (mediumArticleCardCount > mediumArticleCardMax) {
          mediumArticleCardCount = 0;
        }
      } else {
        // a fresh blog post goes only if didn't hit the max
        if (blogPostCount < blogPostMax) {
          card = cardBlogPostMedium(blogPost);
          blogPost = b.shift();
          blogPostCount++;
          if (blogPostCount > blogPostMax) {
            blogPostCount = 0;
          }
        } else {
          // otherwise, an article goes again
          card =
            mediumArticleCardCount > mediumArticleCardMax
              ? cardArticleLarge(article)
              : cardArticleMedium(article);
          article = a.shift();
          mediumArticleCardCount++;
          if (mediumArticleCardCount > mediumArticleCardMax) {
            mediumArticleCardCount = 0;
          }
        }
      }
    } else {
      // only one of the two available, just add it
      if (article) {
        card =
          mediumArticleCardCount > mediumArticleCardMax
            ? cardArticleLarge(article)
            : cardArticleMedium(article);
        article = a.shift();
        mediumArticleCardCount++;
        if (mediumArticleCardCount > mediumArticleCardMax) {
          mediumArticleCardCount = 0;
        }
      }
      if (blogPost) {
        card = cardBlogPostMedium(blogPost);
        blogPost = b.shift();
      }
    }

    if (card) {
      feed.push(card);
    }
  }

  return feed;
};

export const content: THtmlEntity[] = buildFeed(articles, blogPosts);
