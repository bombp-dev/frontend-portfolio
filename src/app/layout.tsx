import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Thailand"
  ],
  authors: [{ name: "Chanchai Phoyoo" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col overflow-x-clip">
        <SkipLink />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
