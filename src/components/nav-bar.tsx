import { UserButton } from "@neondatabase/neon-js/auth/react/ui";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavBar() {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="w-full flex items-center gap-2">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-gray-900"
          >
            Crate
          </Link>
          <NavigationMenu className="flex w-full ml-auto">
            <NavigationMenuList className="flex items-center gap-2">
              <NavigationMenuItem>
                <UserButton size="icon" />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
