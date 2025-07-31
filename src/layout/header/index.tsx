"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* PC版ヘッダー */}
      <header className="hidden lg:block w-full bg-white/70">
        <div className="max-w-screen mx-auto px-8 py-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-Main-Green-2 text-4xl font-['Croissant_One']"
          >
            Touch wood
          </Link>

          <nav className="flex items-center gap-10">
            <Link
              href="/"
              className="text-Main-Green-2 text-2xl font-black font-['Noto_Serif_JP'] hover:opacity-70 transition"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-Main-Green-2 text-2xl font-black font-['Noto_Serif_JP'] hover:opacity-70 transition"
            >
              Menu
            </Link>
            <Link
              href="/service"
              className="text-Main-Green-2 text-2xl font-black font-['Noto_Serif_JP'] hover:opacity-70 transition"
            >
              Service
            </Link>
            <button className="px-6 py-2 bg-Main-Brown-2 rounded-full text-System-Gray-White text-2xl font-black hover:bg-Main-Brown-3 transition">
              Reservation
            </button>
          </nav>
        </div>
      </header>

      {/* SP版ヘッダー */}
      <header className="lg:hidden w-full bg-white/70">
        <div className="w-full px-4 py-2 flex justify-between items-center">
          <Link
            href="/"
            className="text-Main-Green-2 text-base font-['Croissant_One']"
          >
            Touch wood
          </Link>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-Main-Brown-2 rounded-full text-white text-xs font-bold hover:bg-Main-Brown-3 transition">
              Reservation
            </button>

            <button
              onClick={toggleMenu}
              className="w-6 h-6 relative focus:outline-none"
              aria-label="メニューを開く"
              aria-expanded={isMenuOpen}
            >
              {/* ハンバーガーライン */}
              <span
                className={`block absolute left-1 top-[6px] w-4 h-0.5 bg-Main-Green-2 transform transition duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block absolute left-1 top-[11px] w-4 h-0.5 bg-Main-Green-2 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block absolute left-1 top-[16px] w-4 h-0.5 bg-Main-Green-2 transform transition duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* 展開メニュー */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-4 space-y-4 bg-white/70 backdrop-blur-md">
            {["/", "/menu", "/service"].map((path, i) => (
              <Link
                key={i}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-Main-Green-2 text-lg font-black font-['Noto_Serif_JP'] hover:opacity-70 transition"
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
