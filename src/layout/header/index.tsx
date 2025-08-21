"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* PC版ヘッダー */}
      <header className="hidden lg:block w-full bg-white z-30">
        <div className="max-w-screen mx-auto px-8 py-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-Main-Green-2 text-4xl font-black font-['Noto_Serif_JP']"
          >
            Touch wood
          </Link>

          <nav className="flex items-center gap-10">
            <Link
              href="/contact"
              className="relative text-Main-Green-2 text-2xl font-black font-['Noto_Serif_JP'] hover:opacity-70 transition-opacity duration-300 group"
            >
              Contact
              {/* ホバー時の下線アニメーション */}
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-Main-Green-2 transform -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <a
              href="https://yoyaku.tabelog.com/yoyaku/net_booking_form/index?rcd=13311579"
              className="px-6 py-2 bg-Main-Brown-2 rounded-full text-System-Gray-White text-2xl font-black hover:bg-Main-Brown-3 transition-colors duration-300"
            >
              Reservation
            </a>
          </nav>
        </div>
      </header>

      {/* SP版ヘッダー */}
      <header className="lg:hidden w-full bg-white z-50 relative">
        <div className="w-full px-4 py-2 flex justify-between items-center">
          <Link
            href="/"
            className="text-Main-Green-2 text-base font-black font-['Noto_Serif_JP']"
          >
            Touch wood
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://yoyaku.tabelog.com/yoyaku/net_booking_form/index?rcd=13311579"
              className="px-4 py-2 bg-Main-Brown-2 rounded-full text-white text-xs font-bold hover:bg-Main-Brown-3 transition-colors duration-300"
            >
              Reservation
            </a>

            <button
              onClick={toggleMenu}
              className="w-6 h-6 relative focus:outline-none"
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
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

        {/* 展開メニュー */}
        <div
          className={`w-full bg-white border-t border-System-Gray-Gray-4 transition-all duration-300 ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="p-4">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center py-3 text-Main-Green-2 text-sm font-bold font-['Noto_Serif_JP'] hover:opacity-70 transition-opacity duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* メニュー開時の背景オーバーレイ */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
