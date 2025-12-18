// Dynamic route segment for account pages
// /account/settings - User can manage their profile details
// /account/security - Change password and list active session
import { AccountView } from "@neondatabase/neon-js/auth/react/ui";
import { accountViewPaths } from "@neondatabase/neon-js/auth/react/ui/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(accountViewPaths).map((path) => ({ path }));
}

export default async function AccountPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return (
    <main className="container p-4 md:p-6">
      <AccountView path={path} />
    </main>
  );
}
