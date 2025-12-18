"use server";

import { neonAuth } from "@neondatabase/neon-js/auth/next";
import { redirect } from "next/navigation";

export type CreateArticleInput = {
  title: string;
  content: string;
  authorId: string;
  imageUrl?: string;
};

export type UpdateArticleInput = {
  title?: string;
  content?: string;
  imageUrl?: string;
};

export async function createArticle(data: CreateArticleInput) {
  const { user } = await neonAuth();

  if (!user) {
    throw new Error("User must be signed in to create an article");
  }
  // TODO: Replace with actual database call
  console.log("✨ createArticle called:", data);
  return { success: true, message: "Article create logged (stub)" };
}

export async function updateArticle(id: string, data: UpdateArticleInput) {
  const { user } = await neonAuth();

  if (!user) {
    throw new Error("User must be signed in to update an article");
  }
  const authorId = user.id;
  // TODO: Replace with actual database update
  console.log("📝 updateArticle called:", authorId, { id, ...data });
  return { success: true, message: `Article ${id} update logged (stub)` };
}

export async function deleteArticle(id: string) {
  const { user } = await neonAuth();

  if (!user) {
    throw new Error("User must be signed in to delete an article");
  }
  const authorId = user.id;

  // TODO: Replace with actual database delete
  console.log("🗑️ deleteArticle called:", authorId, id);
  return { success: true, message: `Article ${id} delete logged (stub)` };
}

// Form-friendly server action: accepts FormData from a client form and calls deleteArticle
export async function deleteArticleForm(formData: FormData): Promise<void> {
  const id = formData.get("id");
  if (!id) {
    throw new Error("Missing article id");
  }

  await deleteArticle(String(id));
  // After deleting, redirect the user back to the homepage.
  redirect("/");
}
