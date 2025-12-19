// helper function to pull data from db and return articles
// todo: pagination, filtering, etc.

import { count, desc, eq } from "drizzle-orm";
import db from "@/db/index";
import { articles, usersSync } from "@/db/schema";

export async function getArticles(page = 1, pageSize = 10) {
  const offset = (page - 1) * pageSize;

  const [articlesList, totalCount] = await Promise.all([
    db
      .select({
        title: articles.title,
        id: articles.id,
        createdAt: articles.createdAt,
        content: articles.content,
        author: usersSync.name,
      })
      .from(articles)
      .leftJoin(usersSync, eq(articles.authorId, usersSync.id))
      .orderBy(desc(articles.createdAt))
      .limit(pageSize)
      .offset(offset),
    db
      .select({ count: count() })
      .from(articles)
      .then((result) => result[0]?.count ?? 0),
  ]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return {
    articles: articlesList,
    pagination: {
      currentPage: page,
      pageSize,
      totalCount,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

export async function getArticleById(id: number) {
  const response = await db
    .select({
      title: articles.title,
      id: articles.id,
      createdAt: articles.createdAt,
      content: articles.content,
      author: usersSync.name,
      imageUrl: articles.imageUrl,
    })
    .from(articles)
    .where(eq(articles.id, id))
    .leftJoin(usersSync, eq(articles.authorId, usersSync.id));
  return response[0] ? response[0] : null;
}
