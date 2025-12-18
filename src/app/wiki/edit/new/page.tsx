"use client";

import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@neondatabase/neon-js/auth/react/ui";
import WikiEditor from "@/components/wiki-editor";

export default function NewArticlePage() {
  return (
    <>
      <SignedIn>
        <WikiEditor isEditing={false} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
