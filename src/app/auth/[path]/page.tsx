// Dynamic route segment for authentication pages:
// /auth/sign-in - Sign in with email/password and social providers
// /auth/sign-up - New account registration
// /auth/sign-out - Sign the user out of the application
import "../../neon.css";
import { AuthView } from "@neondatabase/neon-js/auth/react/ui";

export const dynamicParams = false;

export default async function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return (
    <main className="container mx-auto flex grow flex-col items-center justify-center gap-3 self-center p-4 md:p-6">
      <AuthView path={path} />
    </main>
  );
}
