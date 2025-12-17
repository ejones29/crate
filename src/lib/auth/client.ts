// src/lib/auth/client.ts
// Create an authentication client for Neon Auth
// The exported authClient is imported and used in the NeonAuthUIProvider in layout.tsx

"use client";

import { createAuthClient } from "@neondatabase/neon-js/auth/next";

export const authClient = createAuthClient();
