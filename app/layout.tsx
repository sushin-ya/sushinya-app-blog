import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sushin-ya blog",
  description: "sushin-ya blog site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          inter.className,
          // TODO: backgroundColorはdarkMode対応で指定の仕方変わるはず
          "max-w-4xl flex flex-col mx-auto text-neutral-50 bg-black",
        )}
      >
        <main className="flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
