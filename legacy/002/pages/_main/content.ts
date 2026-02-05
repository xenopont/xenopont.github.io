import { dateToIso8601 } from "../../converters/date-to-iso-8601.js";
import * as m from "../../html-markup/html-elements.js";
import * as s from "../../html-markup/non-html-elements.js";
import type { THtmlElementMarkup } from "../../html-markup/types.js";
import type { TPage } from "../../types/page.js";
import { articles } from "../articles.js";
import { blog } from "../blog.js";

const mainPageTitle: THtmlElementMarkup = s.safe("Dev XL");

const card = (page: TPage): THtmlElementMarkup => {
  return m.div(
    m.a(
      [
        m.h3(s.safe(page.title)),
        m.div(
          m.span(s.safe(dateToIso8601(page.createdAt)), {
            class: "date-value",
          }),
          { class: "date" },
        ),
        m.div(s.safe(page.summary), { class: "summary" }),
      ],
      { href: page.uri },
    ),
    {
      class: "card",
    },
  );
};

const articleList = (articles: TPage[]): THtmlElementMarkup => {
  if (articles.length === 0) {
    return s.safe("");
  }

  return m.section(
    [
      m.header(m.h2(s.safe("Articles"))),
      m.menu(
        articles
          // latest at the top
          .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
          .map((page) => m.li(card(page))),
      ),
    ],
    { id: "article-section" },
  );
};

const blogpostList = (blogposts: TPage[]): THtmlElementMarkup => {
  if (blogposts.length === 0) {
    return s.safe("");
  }

  return m.section(
    [
      m.menu(
        blogposts
          // latest at the bottom
          .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
          .map((page) => m.li(card(page))),
      ),
      m.header(m.h2(s.safe("Blogposts"))),
    ],
    { id: "blog-section" },
  );
};

export const generateMainPageContent = (): THtmlElementMarkup[] => {
  return [
    m.div(mainPageTitle, { class: "main-page-title shadow" }),
    m.div(mainPageTitle, { class: "main-page-title text" }),
    articleList(articles),
    m.div(s.safe(""), { id: "article-section-overlay" }),
    blogpostList(blog),
    m.div(s.safe(""), { id: "blog-section-overlay" }),
  ].filter((element) => element !== "");
};
