import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react/ui";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { authClient } from "@/lib/auth/client";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import Favicon from "../app/favicon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crate",
  description: "A personal knowledge system focused on curation and revision",
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NeonAuthUIProvider
          authClient={authClient}
          redirectTo="/account/settings"
          emailOTP
          social={{ providers: ["google", "github"] }}
          avatar={{ size: 256, extension: "webp" }}
        >
          <NavBar />
          {children}
        </NeonAuthUIProvider>
      </body>
    </html>
  );
}
