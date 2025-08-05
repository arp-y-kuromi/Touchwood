"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  // 住所情報
  const address = "〒151-0073 東京都渋谷区笹塚３丁目１７−３ つるやビル２階";
  const encodedAddress = encodeURIComponent(
    "東京都渋谷区笹塚３丁目１７−３ つるやビル２階"
  );

  // Googleマップリンク生成
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  const handleMapClick = () => {
    window.open(googleMapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Accessセクション - PC版 */}
      <section className="hidden lg:block w-full bg-Main-Brown-3 py-20 px-20 xl:px-40">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-start">
          {/* 左側：店舗情報 */}
          <div className="w-1/2 flex flex-col gap-10">
            <h2 className="text-4xl font-black text-Main-Green-2 font-['Noto_Serif_JP']">
              Access
            </h2>

            <div className="flex flex-col gap-4 font-['Noto_Serif_JP']">
              {/* 住所 */}
              <div className="flex gap-4">
                <div className="w-32 text-xl font-bold text-Main-Green-2">
                  住所
                </div>
                <div className="text-xl font-bold text-Main-Green-2">
                  {address}
                </div>
              </div>

              {/* TEL */}
              <div className="flex gap-4">
                <div className="w-32 text-xl font-bold text-Main-Green-2">
                  TEL
                </div>
                <a
                  href="tel:070-9155-7471"
                  className="text-xl font-bold text-Main-Green-2 hover:opacity-70 transition-opacity"
                >
                  070-9155-7471
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="w-32 text-xl font-bold text-Main-Green-2">
                  EMAIL
                </div>
                <a
                  href="mailto:hayahayato0901@gmail.com"
                  className="text-xl font-bold text-Main-Green-2 hover:opacity-70 transition-opacity"
                >
                  hayahayato0901@gmail.com
                </a>
              </div>

              {/* 営業時間 */}
              <div className="flex gap-4">
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
              <div className="flex gap-4">
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
              className="w-[244px] px-8 py-4 bg-Main-Brown-2 rounded-full inline-flex justify-center items-center gap-2.5 overflow-hidden hover:bg-Main-Brown-1 transition-colors"
            >
              <div className="text-center justify-start text-System-Gray-White text-xl font-bold font-['Noto_Serif_JP']">
                ご予約はこちらから
              </div>
            </a>
          </div>

          {/* 右側：地図/画像エリア */}
          <div className="w-1/2 h-96 relative overflow-hidden rounded-lg">
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
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                quality={95}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accessセクション - SP版 */}
      <section className="lg:hidden w-full bg-Main-Brown-3 px-4 py-7">
        <div className="max-w-md mx-auto flex flex-col gap-8 items-center">
          <h2 className="text-xl font-black text-Main-Green-2 font-['Noto_Serif_JP']">
            Access
          </h2>

          <div className="flex flex-col gap-4 w-full font-['Noto_Serif_JP']">
            {/* 住所 */}
            <div className="flex gap-4">
              <div className="w-16 text-[10px] font-bold text-Main-Green-2">
                住所
              </div>
              <div className="text-[10px] font-bold text-Main-Green-2">
                {address}
              </div>
            </div>

            {/* TEL */}
            <div className="flex gap-4">
              <div className="w-16 text-[10px] font-bold text-Main-Green-2">
                TEL
              </div>
              <a
                href="tel:070-9155-7471"
                className="text-[10px] font-bold text-Main-Green-2 hover:opacity-70 transition-opacity"
              >
                070-9155-7471
              </a>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4">
              <div className="w-16 text-[10px] font-bold text-Main-Green-2">
                EMAIL
              </div>
              <a
                href="mailto:hayahayato0901@gmail.com"
                className="text-[10px] font-bold text-Main-Green-2 hover:opacity-70 transition-opacity"
              >
                hayahayato0901@gmail.com
              </a>
            </div>

            {/* 営業時間 */}
            <div className="flex gap-4">
              <div className="w-16 text-[10px] font-bold text-Main-Green-2">
                営業時間
              </div>
              <div className="text-[10px] font-bold text-Main-Green-2">
                11:30〜15:00
                <br />
                17:30〜23:00
              </div>
            </div>

            {/* 定休日 */}
            <div className="flex gap-4">
              <div className="w-16 text-[10px] font-bold text-Main-Green-2">
                定休日
              </div>
              <div className="text-[10px] font-bold text-Main-Green-2">
                毎週月曜日
              </div>
            </div>
          </div>

          {/* 予約ボタン */}
          <a
            href="https://yoyaku.tabelog.com/yoyaku/net_booking_form/index?rcd=13311579"
            className="px-8 py-3 bg-Main-Brown-2 rounded-full hover:bg-Main-Brown-1 transition-colors"
          >
            <div className="text-xs font-bold text-System-Gray-White">
              ご予約はこちらから
            </div>
          </a>

          {/* 地図/画像エリア */}
          <div className="w-full h-64 relative overflow-hidden rounded-lg">
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
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                quality={95}
                priority
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* PC版フッター */}
      <footer className="hidden lg:block">
        <div className="w-full py-10 bg-Main-Green-2 inline-flex flex-col justify-start items-center gap-14 overflow-hidden">
          <div className="flex flex-col justify-start items-center gap-8">
            {/* ロゴ */}
            <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
              <Link
                href="/"
                className="text-center justify-start text-System-Gray-White text-3xl font-normal font-['Croissant_One'] hover:opacity-80 transition-opacity"
              >
                Touch wood
              </Link>
            </div>

            {/* ソーシャルメディアアイコン */}
            <div className="inline-flex justify-start items-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/touchwood2507?igsh=ODZ6NWU3YW91djk0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/images/Instagram icon.png"
                  alt="Instagram Icon"
                  width={64}
                  height={64}
                />
              </a>
            </div>
          </div>

          {/* コピーライト */}
          <div className="justify-start text-System-Gray-White text-base font-bold font-['Noto_Serif_JP']">
            ©2025 Touch wood All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* SP版フッター */}
      <footer className="lg:hidden w-full">
        <div className="w-full px-4 pt-6 pb-2.5 bg-Main-Green-2 flex flex-col items-center gap-6">
          {/* ロゴ */}
          <Link
            href="/"
            className="text-center text-System-Gray-White text-base font-normal font-['Croissant_One'] hover:opacity-80 transition-opacity"
          >
            Touch wood
          </Link>

          {/* ソーシャルメディアアイコン */}
          <div className="flex justify-center items-center gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/touchwood2507?igsh=ODZ6NWU3YW91djk0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="/images/Instagram icon.png"
                alt="Instagram Icon"
                width={64}
                height={64}
              />
            </a>
          </div>

          {/* コピーライト */}
          <div className="text-System-Gray-White text-[8px] font-bold font-['Noto_Serif_JP'] leading-9">
            ©2025 Touch wood All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
