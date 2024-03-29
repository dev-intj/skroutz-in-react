import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skroutz in React",
  description: "created by @dev-intj on github",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
