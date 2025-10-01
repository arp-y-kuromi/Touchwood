"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const MainVisual: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    "/images/main1.JPG",
    "/images/service.jpeg",
    "/images/menu.JPG",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full relative">
      <div className="relative w-full h-[60vh] md:h-[835px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* 背景画像を薄く表示 */}
            <div className="absolute inset-0 bg-white/40" />
          </div>
        ))}

        {/* テキストオーバーレイ */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <h1
            className={`text-4xl md:text-7xl font-bold text-gray-800 mb-4 md:mb-6 tracking-wider transition-all duration-1000 delay-300 font-['Noto_Serif_JP'] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Touch wood
          </h1>
          <p
            className={`text-lg md:text-2xl text-gray-900 font-medium transition-all duration-1000 delay-500 font-['Noto_Serif_JP'] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            お客様の日常に小さな幸せを
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
