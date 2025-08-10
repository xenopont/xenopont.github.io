import { dateToIso8601 } from "../../converters/date-to-iso-8601.js";
import type { THtmlElementMarkup } from "../../render/markup.js";
import * as m from "../../render/markup.js";
import type { TPage } from "../../types/page.js";
import { articles } from "../articles.js";
import { blog } from "../blog.js";

const mainPageTitle: THtmlElementMarkup = m.safe("Dev XL");

const card = (page: TPage): THtmlElementMarkup => {
  return m.div(
    m.a(`/${page.path}/`, [
      m.h3(m.safe(page.title)),
      m.div(
        m.span(m.safe(dateToIso8601(page.createdAt)), { class: "date-value" }),
        { class: "date" },
      ),
      m.div(m.safe(page.summary), { class: "summary" }),
    ]),
    {
      class: "card",
    },
  );
};

const articleList = (articles: TPage[]): THtmlElementMarkup => {
  if (articles.length === 0) {
    return m.safe("");
  }

  return m.section(
    [
      m.header(m.h2(m.safe("Articles"))),
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
    return m.safe("");
  }

  return m.section(
    [
      m.menu(
        blogposts
          // latest at the bottom
          .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
          .map((page) => m.li(card(page))),
      ),
      m.header(m.h2(m.safe("Blogposts"))),
    ],
    { id: "blog-section" },
  );
};

export const generateMainPageContent = (): THtmlElementMarkup[] => {
  return [
    m.div(mainPageTitle, { class: "main-page-title shadow" }),
    m.div(mainPageTitle, { class: "main-page-title text" }),
    articleList(articles),
    m.div(m.safe(""), { id: "article-section-overlay" }),
    blogpostList(blog),
    m.div(m.safe(""), { id: "blog-section-overlay" }),
  ].filter((element) => element !== "");
};
