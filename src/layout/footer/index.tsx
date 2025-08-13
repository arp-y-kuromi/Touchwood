"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const address = "〒151-0073 東京都渋谷区笹塚３丁目１７−３";
  const building = "つるやビル２階";
  const encodedAddress = encodeURIComponent(
    "東京都渋谷区笹塚３丁目１７−３ つるやビル２階"
  );
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  const handleMapClick = () => {
    window.open(googleMapUrl, "_blank", "noopener,noreferrer");
  };

  // PC/SP別々に監視するref
  const accessPCRef = useRef<HTMLDivElement>(null);
  const accessSPRef = useRef<HTMLDivElement>(null);
  const footerPCRef = useRef<HTMLDivElement>(null);
  const footerSPRef = useRef<HTMLDivElement>(null);

  const [accessPCVisible, setAccessPCVisible] = useState(false);
  const [accessSPVisible, setAccessSPVisible] = useState(false);
  const [footerPCVisible, setFooterPCVisible] = useState(false);
  const [footerSPVisible, setFooterSPVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === accessPCRef.current) setAccessPCVisible(true);
            if (entry.target === accessSPRef.current) setAccessSPVisible(true);
            if (entry.target === footerPCRef.current) setFooterPCVisible(true);
            if (entry.target === footerSPRef.current) setFooterSPVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (accessPCRef.current) observer.observe(accessPCRef.current);
    if (accessSPRef.current) observer.observe(accessSPRef.current);
    if (footerPCRef.current) observer.observe(footerPCRef.current);
    if (footerSPRef.current) observer.observe(footerSPRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px) scale(0.8);
          }
          60% {
            transform: translateX(10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.8);
          }
          60% {
            transform: translateX(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          60% {
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1) rotate(5deg);
          }
          70% {
            transform: scale(0.9) rotate(-2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0.2) 80%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .info-item {
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .info-item:hover {
          transform: translateX(10px) scale(1.02);
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }
        .social-icon {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .social-icon:hover {
          transform: rotate(360deg) scale(1.2);
          filter: brightness(1.3) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
        }
      `}</style>

      {/* Accessセクション - PC版 */}
      <section
        ref={accessPCRef}
        className={`hidden lg:block w-full bg-Main-Brown-3 py-20 px-20 xl:px-40 transform transition-all duration-1000 ease-out ${
          accessPCVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-start">
          {/* 左側：店舗情報 */}
          <div className="w-1/2 flex flex-col gap-10">
            <h2
              className={`text-4xl font-black text-Main-Green-2 font-['Noto_Serif_JP'] transform transition-all duration-1000 ${
                accessPCVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
              style={{
                animation: accessPCVisible
                  ? "bounceIn 1s ease-out 0.3s both"
                  : "none",
              }}
            >
              Access
            </h2>

            <div className="flex flex-col gap-4 font-['Noto_Serif_JP']">
              {/* 住所 */}
              <div
                className={`flex gap-4 info-item transform transition-all duration-800 ${
                  accessPCVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
                style={{
                  animation: accessPCVisible
                    ? "slideInLeft 0.8s ease-out 0.5s both"
                    : "none",
                }}
              >
                <div className="w-32 text-xl font-bold text-Main-Green-2">
                  住所
                </div>
                <div className="text-xl font-bold text-Main-Green-2">
                  {address}
                  <br />
                  {building}
                </div>
              </div>

              {/* TEL */}
              <div
                className={`flex gap-4 info-item transform transition-all duration-800 ${
                  accessPCVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
                style={{
                  animation: accessPCVisible
                    ? "slideInLeft 0.8s ease-out 0.7s both"
                    : "none",
                }}
              >
                <div className="w-32 text-xl font-bold text-Main-Green-2">
                  TEL
                </div>
                <a
                  href="tel:070-9155-7471"
                  className="text-xl font-bold text-Main-Green-2 hover:opacity-70 transition-all duration-300 hover:scale-105"
                >
                  070-9155-7471
                </a>
              </div>

              {/* EMAIL */}
              <div
                className={`flex gap-4 info-item transform transition-all duration-800 ${
                  accessPCVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
                style={{
                  animation: accessPCVisible
                    ? "slideInLeft 0.8s ease-out 0.9s both"
                    : "none",
                }}
              >
                <div className="w-32 text-xl font-bold text-Main-Green-2">
                  EMAIL
                </div>
                <a
                  href="mailto:hayahayato0901@gmail.com"
                  className="text-xl font-bold text-Main-Green-2 hover:opacity-70 transition-all duration-300 hover:scale-105"
                >
                  hayahayato0901@gmail.com
                </a>
              </div>

              {/* 営業時間 */}
              <div
                className={`flex gap-4 info-item transform transition-all duration-800 ${
                  accessPCVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
                style={{
                  animation: accessPCVisible
                    ? "slideInLeft 0.8s ease-out 1.1s both"
                    : "none",
                }}
              >
                <div className="w-32 text-xl font-bold text-Main-Green-2">
                  営業時間
                </div>
                <div className="text-xl font-bold text-Main-Green-2">
                  11:30〜15:00
                  <br />
                  17:30〜23:00
                </div>
              </div>

              {/* 定休日 */}
              <div
                className={`flex gap-4 info-item transform transition-all duration-800 ${
                  accessPCVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
                style={{
                  animation: accessPCVisible
                    ? "slideInLeft 0.8s ease-out 1.3s both"
                    : "none",
                }}
              >
                <div className="w-32 text-xl font-bold text-Main-Green-2">
                  定休日
                </div>
                <div className="text-xl font-bold text-Main-Green-2">
                  毎週月曜日
                </div>
              </div>
            </div>

            {/* 予約ボタン */}
            <a
              href="https://yoyaku.tabelog.com/yoyaku/net_booking_form/index?rcd=13311579"
              className={`w-[244px] px-8 py-4 bg-Main-Brown-2 rounded-full inline-flex justify-center items-center gap-2.5 overflow-hidden hover:bg-Main-Brown-1 transition-all duration-500 hover:scale-110 hover:shadow-2xl transform ${
                accessPCVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                animation: accessPCVisible
                  ? "bounceIn 1s ease-out 1.5s both"
                  : "none",
              }}
            >
              <div className="text-center justify-start text-System-Gray-White text-xl font-bold font-['Noto_Serif_JP']">
                ご予約はこちらから
              </div>
            </a>
          </div>

          {/* 右側：地図/画像エリア */}
          <div
            className={`w-1/2 h-96 relative overflow-hidden rounded-lg transform transition-all duration-1000 ${
              accessPCVisible
                ? "opacity-100 translate-x-0 rotate-0"
                : "opacity-0 translate-x-16 rotate-6"
            }`}
            style={{
              animation: accessPCVisible
                ? "slideInRight 1s ease-out 0.8s both"
                : "none",
            }}
          >
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={handleMapClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleMapClick();
                }
              }}
              aria-label="Googleマップで住所を開く"
            >
              <Image
                src="/images/mapPC.png"
                alt="Touch wood店舗の地図"
                fill
                className="object-cover rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 filter group-hover:brightness-110"
                quality={95}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessセクション - SP版 */}
      <section
        ref={accessSPRef}
        className={`lg:hidden w-full bg-Main-Brown-3 px-4 py-7 transform transition-all duration-1000 ease-out ${
          accessSPVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-md mx-auto flex flex-col gap-8 items-center">
          <h2
            className={`text-xl font-black text-Main-Green-2 font-['Noto_Serif_JP'] transform transition-all duration-800 ${
              accessSPVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{
              animation: accessSPVisible
                ? "bounceIn 1s ease-out 0.3s both"
                : "none",
            }}
          >
            Access
          </h2>

          <div className="flex flex-col gap-4 w-full font-['Noto_Serif_JP']">
            {[
              { label: "住所", content: address },
              {
                label: "TEL",
                content: "070-9155-7471",
                href: "tel:070-9155-7471",
              },
              {
                label: "EMAIL",
                content: "hayahayato0901@gmail.com",
                href: "mailto:hayahayato0901@gmail.com",
              },
              { label: "営業時間", content: "11:30〜15:00\n17:30〜23:00" },
              { label: "定休日", content: "毎週月曜日" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`flex gap-4 info-item transform transition-all duration-600 ${
                  accessSPVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{
                  animation: accessSPVisible
                    ? `fadeInUp 0.6s ease-out ${0.5 + index * 0.1}s both`
                    : "none",
                }}
              >
                <div className="w-16 text-[10px] font-bold text-Main-Green-2">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[10px] font-bold text-Main-Green-2 hover:opacity-70 transition-all duration-300 hover:scale-105"
                  >
                    {item.content}
                  </a>
                ) : (
                  <div className="text-[10px] font-bold text-Main-Green-2">
                    {item.content.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < item.content.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 予約ボタン */}
          <a
            href="https://yoyaku.tabelog.com/yoyaku/net_booking_form/index?rcd=13311579"
            className={`px-8 py-3 bg-Main-Brown-2 rounded-full hover:bg-Main-Brown-1 transition-all duration-500 hover:scale-110 hover:shadow-xl transform ${
              accessSPVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              animation: accessSPVisible
                ? "pulse 2s ease-in-out 1.2s infinite"
                : "none",
            }}
          >
            <div className="text-xs font-bold text-System-Gray-White">
              ご予約はこちらから
            </div>
          </a>

          {/* 地図/画像エリア */}
          <div
            className={`w-full h-64 relative overflow-hidden rounded-lg transform transition-all duration-1000 ${
              accessSPVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{
              animation: accessSPVisible
                ? "bounceIn 1s ease-out 1s both"
                : "none",
            }}
          >
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={handleMapClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleMapClick();
                }
              }}
              aria-label="Googleマップで住所を開く"
            >
              <Image
                src="/images/mapPC.png"
                alt="Touch wood店舗の地図"
                fill
                className="object-cover rounded-lg transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                quality={95}
                priority
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - PC版 */}
      <footer
        ref={footerPCRef}
        className={`hidden lg:block transform transition-all duration-1000 ease-out ${
          footerPCVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="w-full py-10 bg-Main-Green-2 inline-flex flex-col justify-start items-center gap-14 overflow-hidden">
          <div className="flex flex-col justify-start items-center gap-8">
            {/* ロゴ */}
            <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
              <Link
                href="/"
                className={`text-center justify-start text-System-Gray-White text-3xl font-black font-['Noto_Serif_JP'] hover:opacity-80 transition-all duration-500 hover:scale-110 transform ${
                  footerPCVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                }`}
                style={{
                  animation: footerPCVisible
                    ? "float 3s ease-in-out infinite"
                    : "none",
                }}
              >
                Touch wood
              </Link>
            </div>

            {/* ソーシャルメディアアイコン */}
            <div
              className={`inline-flex justify-start items-center gap-6 transform transition-all duration-800 ${
                footerPCVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            >
              {/* Instagram */}
              <a
                href="https://www.instagram.com/touchwood2507?igsh=ODZ6NWU3YW91djk0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon transform"
                style={{
                  animation: footerPCVisible
                    ? "bounceIn 0.8s ease-out 0.5s both"
                    : "none",
                }}
              >
                <Image
                  src="/images/Instagram icon.png"
                  alt="Instagram Icon"
                  width={64}
                  height={64}
                />
              </a>
              {/* 食べログ */}
              <a
                href="https://yoyaku.tabelog.com/yoyaku/net_booking_form/index?rcd=13311579"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="食べログ"
                className="social-icon transform"
                style={{
                  animation: footerPCVisible
                    ? "bounceIn 0.8s ease-out 0.7s both"
                    : "none",
                }}
              >
                <Image
                  src="/images/taberogu icon.png"
                  alt="taberogu Icon"
                  width={64}
                  height={64}
                />
              </a>
            </div>
          </div>

          {/* コピーライト */}
          <div
            className={`justify-start text-System-Gray-White text-base font-bold font-['Noto_Serif_JP'] transform transition-all duration-800 ${
              footerPCVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              animation: footerPCVisible
                ? "fadeInUp 0.8s ease-out 0.9s both"
                : "none",
            }}
          >
            ©2025 Touch wood All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Footer - SP版 */}
      <footer
        ref={footerSPRef}
        className={`lg:hidden w-full transform transition-all duration-1000 ease-out ${
          footerSPVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="w-full px-4 pt-6 pb-2.5 bg-Main-Green-2 flex flex-col items-center gap-6">
          {/* ロゴ */}
          <Link
            href="/"
            className={`text-center text-System-Gray-White text-base font-black font-['Noto_Serif_JP'] hover:opacity-80 transition-all duration-500 hover:scale-110 transform ${
              footerSPVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
            style={{
              animation: footerSPVisible
                ? "bounceIn 1s ease-out 0.3s both"
                : "none",
            }}
          >
            Touch wood
          </Link>

          {/* ソーシャルメディアアイコン */}
          <div
            className={`flex justify-center items-center gap-6 transform transition-all duration-800 ${
              footerSPVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/touchwood2507?igsh=ODZ6NWU3YW91djk0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon transform"
              style={{
                animation: footerSPVisible
                  ? "bounceIn 0.8s ease-out 0.5s both"
                  : "none",
              }}
            >
              <Image
                src="/images/Instagram icon.png"
                alt="Instagram Icon"
                width={64}
                height={64}
              />
            </a>
            {/* 食べログ */}
            <a
              href="https://yoyaku.tabelog.com/yoyaku/net_booking_form/index?rcd=13311579"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="食べログ"
              className="social-icon transform"
              style={{
                animation: footerSPVisible
                  ? "bounceIn 0.8s ease-out 0.7s both"
                  : "none",
              }}
            >
              <Image
                src="/images/taberogu icon.png"
                alt="taberogu Icon"
                width={64}
                height={64}
              />
            </a>
          </div>

          {/* コピーライト */}
          <div
            className={`text-System-Gray-White text-[8px] font-bold font-['Noto_Serif_JP'] leading-9 transform transition-all duration-800 ${
              footerSPVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              animation: footerSPVisible
                ? "fadeInUp 0.8s ease-out 0.9s both"
                : "none",
            }}
          >
            ©2025 Touch wood All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
