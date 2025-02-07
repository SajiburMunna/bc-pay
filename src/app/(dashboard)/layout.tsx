import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div>
          <Header />
          <main className="px-6 py-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
