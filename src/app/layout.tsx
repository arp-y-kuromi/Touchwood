import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Croissant_One,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/footer";

export const metadata: Metadata = {
  title: "Touch wood",
  description:
    "Touch woodは、旬の食材と居心地の良い雰囲気に重点を置いたユニークなダイニング体験を提供するレストランです。",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-Main-Brown-4`}
      >
        <Header />
        <div className="pt-[60px] lg:pt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
