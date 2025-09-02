import Footer from "@/layout/footer";
import Header from "@/layout/header";
import type { Metadata } from "next";
import {
  Croissant_One,
  Geist,
  Geist_Mono,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Touch wood",
  description:
    "Touch woodは、南フランスとスペインの地中海料理を中心に太陽と風を感じるような一皿をカジュアルに愉しめるビストロです。",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const croissantOne = Croissant_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-croissant-one",
});

export const notoSerifJP = Noto_Serif_JP({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-Main-Brown-4`}
      >
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
