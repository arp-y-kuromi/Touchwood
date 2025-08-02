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
      <header className="hidden lg:block w-full bg-white fixed top-0 left-0 right-0 z-30">
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
      <header className="lg:hidden w-full bg-white fixed top-0 left-0 right-0 z-40">
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
              className="w-6 h-6 relative focus:outline-none z-50"
              aria-label="メニューを開く"
              aria-expanded={isMenuOpen}
            >
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
      </header>

      {/* モーダルオーバーレイとメニュー */}
      {isMenuOpen && (
        <>
          {/* 背景オーバーレイ（ヘッダー下部分のみ） */}
          <div
            className="fixed left-0 right-0 bottom-0 top-[60px] bg-black opacity-40 z-50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* 展開メニュー */}
          <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
            <div className="w-full bg-white/70 px-4 py-2 flex justify-between items-center">
              <Link
                href="/"
                className="text-Main-Green-2 text-base font-['Croissant_One']"
                onClick={() => setIsMenuOpen(false)}
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
                  aria-label="メニューを閉じる"
                >
                  <span className="block absolute left-1 top-[6px] w-4 h-0.5 bg-Main-Green-2 transform rotate-45 translate-y-1" />
                  <span className="block absolute left-1 top-[11px] w-4 h-0.5 bg-Main-Green-2 opacity-0" />
                  <span className="block absolute left-1 top-[16px] w-4 h-0.5 bg-Main-Green-2 transform -rotate-45 -translate-y-1" />
                </button>
              </div>
            </div>

            {/* メニューコンテンツ */}
            <div className="bg-white p-4 flex flex-col justify-start items-center gap-1.5">
              <div className="self-stretch py-3 inline-flex justify-center items-center gap-2.5">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-72 text-center text-Main-Green-2 text-sm font-bold font-['Noto_Serif_JP'] leading-9 hover:opacity-70 transition"
                >
                  Home
                </Link>
              </div>

              <div className="w-64 h-0 outline outline-1 outline-offset-[-0.50px] outline-System-Gray-Gray-4" />

              <div className="self-stretch py-3 inline-flex justify-center items-center gap-2.5">
                <Link
                  href="/menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-72 text-center text-Main-Green-2 text-sm font-bold font-['Noto_Serif_JP'] leading-9 hover:opacity-70 transition"
                >
                  Menu
                </Link>
              </div>

              <div className="w-64 h-0 outline outline-1 outline-offset-[-0.50px] outline-System-Gray-Gray-4" />

              <div className="self-stretch py-3 inline-flex justify-center items-center gap-2.5">
                <Link
                  href="/service"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-72 text-center text-Main-Green-2 text-sm font-bold font-['Noto_Serif_JP'] leading-9 hover:opacity-70 transition"
                >
                  Service
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
