// helper function to pull data from db and return articles


import { count, desc, eq } from "drizzle-orm";
import redis from "@/cache/index";
import db from "@/db/index";
import { articles, usersSync } from "@/db/schema";

export async function getArticles(page = 1, pageSize = 10) {
  const cacheKey = `articles:page=${page}:size=${pageSize}`;
  const cached = await redis.get(cacheKey);
  if (cached) {
    console.log("🔵 Cache Hit -> Returning articles from cache");
    return cached;
  }
  console.log("🟠 Cache Miss -> Fetching articles from DB");

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

  const result = {
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

  // Cache the result for 1 minute (60 seconds)
  await redis.set(cacheKey, result, { ex: 60 });

  return result;
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
