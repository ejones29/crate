# Crate

**Crate** is a personal knowledge system designed for ideas worth keeping — written once, refined over time.

Inspired by the practice of digging through a record crate, Crate emphasizes **curation, authorship, and revision** over volume. It’s not a notes dump. It’s a living archive for patterns, lessons, and decisions you want to revisit.

---

## Why Crate?

Most note-taking tools optimize for capture. Crate optimizes for **retention and refinement**.

Like a vinyl collection:
- You don’t keep everything
- You revisit what matters
- You improve your understanding over time

Crate is built to support that workflow.

---

## Core Concepts

- **Entries**  
  Individual pieces of knowledge — technical notes, ideas, lessons, or references.

- **Revisions**  
  Entries are immutable over time. Each edit creates a new revision, preserving history and authorship.

- **Tags**  
  Lightweight organization for browsing and discovery.

- **Reading Mode**  
  A focused, distraction-free way to revisit content.

---

## Features (WIP) / Roadmap

- Full CRUD for entries
- Revision history with authorship
- Tag-based browsing and filtering
- Markdown-based content
- Focused reading mode
- Authenticated editing with role-based access
- Accessible, keyboard-friendly UI

---

## Tech Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- Server Components & Server Actions

### Backend
- **Neon** (Postgres)
- **Neon Auth**
- **Drizzle ORM**

### Other
- Markdown rendering
- Optimistic UI updates
- Accessible semantic HTML

---

## Data Model (High Level)

- `entries`  
  Represents the canonical identity of a page.

- `revisions`  
  Immutable snapshots of entry content over time.

- `tags`  
  Shared labels for grouping and discovery.

This structure ensures:
- Full edit history
- Clear authorship
- Safe iteration over time

---

## Design Philosophy

- Clarity over cleverness
- Refinement over volume
- Calm, readable interfaces
- Subtle metaphor, never forced

The music / vinyl theme is used as **framing and tone**, not as a constraint on content.

---

## Local Development

```bash
# Install dependencies
npm install

# Run database migrations
npm run db:migrate

# Start the dev server
npm run dev
```

## About This Project

Crate began as a learning exercise and evolved into a product I genuinely wanted to use.
It reflects how I think about software, knowledge, and craft: intentional, iterative, and human.