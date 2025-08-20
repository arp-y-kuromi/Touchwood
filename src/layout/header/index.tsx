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
              href="/form"
              className="relative text-Main-Green-2 text-2xl font-black font-['Noto_Serif_JP'] hover:opacity-70 transition-opacity duration-300 group"
            >
              Form
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
      <header className="lg:hidden w-full bg-white z-40">
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
