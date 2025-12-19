# Data Layer

This directory contains data access functions and query helpers that sit between the application logic and the database.

## Architecture Rationale

### Why `lib/data` instead of `db/`?

The decision to place query helpers like `articles.ts` in `lib/data` rather than in the `db/` directory is intentional and follows the principle of **separation of concerns**:

#### Database Directory (`db/`)
- **Purpose**: Database infrastructure and configuration
- **Contains**: 
  - Database connection setup
  - Schema definitions
  - Migration files
  - Database client initialization
- **Responsibility**: "How to connect to the database"

#### Data Layer (`lib/data/`)
- **Purpose**: Data access and business logic
- **Contains**:
  - Query functions that fetch/manipulate data
  - Data transformation logic
  - Pagination, filtering, and sorting
  - Business rules for data access
- **Responsibility**: "What data to retrieve and how to shape it"

### Benefits of This Separation

1. **Clear Boundaries**: Database connection concerns are isolated from data retrieval logic
2. **Testability**: Data functions can be tested independently of database configuration
3. **Reusability**: Query functions can be used across different parts of the application
4. **Maintainability**: Changes to query logic don't affect database setup, and vice versa
5. **Scalability**: Easy to add caching, validation, or other data-layer concerns without touching database infrastructure

### Example

```typescript
// db/index.ts - Database connection
export default drizzle(pool);

// lib/data/articles.ts - Data access
export async function getArticles(page = 1, pageSize = 10) {
  // Uses db connection but encapsulates query logic
}
```

This architecture allows the database connection and data querying to be maintained separately, making the codebase more organized and easier to reason about.