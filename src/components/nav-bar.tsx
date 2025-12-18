import { UserButton } from "@stackframe/stack";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { stackServerApp } from "@/stack/server";
import LogoIcon from "../app/assets/logo.png"

export async function NavBar() {
  const user = await stackServerApp.getUser();

  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="w-full flex items-center gap-2">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-gray-900 flex items-center"
          >
            <Image src={LogoIcon} alt="Crate Logo" className="inline-block mr-2 h-5 w-5" width={24} height={24} />
            Crate
          </Link>
          <NavigationMenu className="flex w-full ml-auto">
            <NavigationMenuList className="flex items-center gap-2">
              {user ? (
              <>
                <NavigationMenuItem>
                  <Button asChild variant="outline">
                    <Link href="/wiki/edit/new">New Article</Link>
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <UserButton />
                </NavigationMenuItem>
              </>
            ) : (
              <>
                <NavigationMenuItem>
                  <Button asChild variant="outline">
                    <Link href="/handler/sign-in">Sign In</Link>
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button asChild>
                    <Link href="/handler/sign-up">Sign Up</Link>
                  </Button>
                </NavigationMenuItem>
              </>
            )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
