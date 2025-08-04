import type { THtmlElementMarkup } from "../../render/markup.js";
import * as m from "../../render/markup.js";
import type { TPage } from "../../types/page.js";
import { articles } from "../articles.js";
import { blog } from "../blog.js";

const mainPageTitle: THtmlElementMarkup = m.text("Dev XL");

const formatDate = (date: Date): string => {
  return date.toISOString().split("T").shift() ?? "";
};

const card = (page: TPage): THtmlElementMarkup => {
  return m.div(
    m.a(`/${page.path}/`, [
      m.h3(m.text(page.title)),
      m.div(
        m.span(m.text(formatDate(page.createdAt)), { class: "date-value" }),
        { class: "date" },
      ),
      m.div(m.text(page.summary), { class: "summary" }),
    ]),
    {
      class: "card",
    },
  );
};

const articleList = (articles: TPage[]): THtmlElementMarkup => {
  if (articles.length === 0) {
    return m.text("");
  }

  return m.section(
    [
      m.header(m.h2(m.text("Articles"))),
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
    return m.text("");
  }

  return m.section(
    [
      m.menu(
        blogposts
          // latest at the bottom
          .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
          .map((page) => m.li(card(page))),
      ),
      m.header(m.h2(m.text("Blogposts"))),
    ],
    { id: "blog-section" },
  );
};

export const generateMainPageContent = (): string => {
  return [
    m.div(mainPageTitle, { class: "_main-page-title shadow" }),
    m.div(mainPageTitle, { class: "_main-page-title text" }),
    articleList(articles),
    m.div(m.text(""), { id: "article-section-overlay" }),
    blogpostList(blog),
    m.div(m.text(""), { id: "blog-section-overlay" }),
  ]
    .filter((element) => element !== "")
    .join("\n");
};
