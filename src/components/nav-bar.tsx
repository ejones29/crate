"use server";

import { neonAuth } from "@neondatabase/neon-js/auth/next";
import { UserButton } from "@neondatabase/neon-js/auth/react/ui";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export async function NavBar() {
  const { user } = await neonAuth();
  
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
              {user ? (
                <NavigationMenuItem>
                  <UserButton size="icon" />
                </NavigationMenuItem>
              ) : (
                <>
                  <NavigationMenuItem>
                    <Button asChild variant="outline">
                      <Link href="/auth/sign-in">Sign In</Link>
                    </Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button asChild>
                      <Link href="/auth/sign-up">Sign Up</Link>
                    </Button>
                  </NavigationMenuItem>
                </>
              )}
              {/* <NavigationMenuItem>
                <UserButton size="icon" />
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
