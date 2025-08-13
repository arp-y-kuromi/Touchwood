"use client";
import React, { useRef, useEffect, useState } from "react";

const Content: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [paragraphsVisible, setParagraphsVisible] = useState<boolean[]>([]);

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // 段階的なアニメーション開始
          setTimeout(() => setTitleVisible(true), 200);
          setTimeout(() => setSubtitleVisible(true), 600);
          setTimeout(() => setContentVisible(true), 1000);

          // パラグラフを順次表示
          const paragraphCount = 8; // 段落の数
          for (let i = 0; i < paragraphCount; i++) {
            setTimeout(() => {
              setParagraphsVisible((prev) => {
                const newVisible = [...prev];
                newVisible[i] = true;
                return newVisible;
              });
            }, 1400 + i * 150);
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="w-full flex flex-col items-center px-6 py-12 gap-6 md:max-w-5xl md:mx-auto md:px-0 md:py-32 md:gap-16 relative overflow-hidden"
    >
      {/* 背景の装飾エフェクト */}
      <div
        className={`
        absolute inset-0 pointer-events-none
        bg-gradient-radial from-Main-Green-2/5 via-transparent to-transparent
        transition-opacity duration-2000 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      ></div>

      {/* 浮遊する装飾要素 */}
      <div
        className={`
        absolute top-10 left-10 w-20 h-20 bg-Main-Green-2/10 rounded-full
        transition-all duration-3000 ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0 rotate-0"
            : "opacity-0 translate-y-8 rotate-45"
        }
      `}
      ></div>
      <div
        className={`
        absolute bottom-10 right-10 w-16 h-16 bg-Main-Brown-2/10 rounded-full
        transition-all duration-3000 ease-out delay-500
        ${
          isVisible
            ? "opacity-100 translate-y-0 rotate-0"
            : "opacity-0 -translate-y-8 -rotate-45"
        }
      `}
      ></div>

      {/* メインタイトル - 3D効果 */}
      <div
        className={`
        w-full text-center text-Main-Green-2 font-black font-['Noto_Serif_JP'] text-xl md:text-5xl
        relative group
        transition-all duration-1500 ease-out transform-gpu
        ${
          titleVisible
            ? "opacity-100 translate-y-0 scale-100 rotate-0"
            : "opacity-0 translate-y-12 scale-110 rotate-3"
        }
        hover:scale-105 hover:-rotate-1 hover:text-Main-Green-1
      `}
        style={{
          textShadow: titleVisible ? "3px 3px 8px rgba(0,0,0,0.15)" : "none",
          transformStyle: "preserve-3d",
        }}
      >
        Touch wood
      </div>

      {/* サブタイトル - タイプライター効果 */}
      <div
        className={`
        w-full text-center text-Main-Green-2 font-black font-['Noto_Serif_JP'] leading-none md:text-2xl md:leading-9
        transition-all duration-1200 ease-out transform-gpu
        ${
          subtitleVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }
        hover:text-Main-Green-1
      `}
      >
        <span
          className={`
          text-xs md:text-2xl block relative overflow-hidden
          transition-all duration-800 ease-out
          ${
            subtitleVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }
        `}
        >
          Wishing you all the best.
          {/* テキストのハイライト効果 */}
          <span
            className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-Main-Green-2/20 to-transparent
            transform -skew-x-12 transition-all duration-1500 ease-out
            ${
              subtitleVisible
                ? "translate-x-full opacity-100"
                : "-translate-x-full opacity-0"
            }
          `}
          ></span>
        </span>

        <span
          className={`
          text-[10px] md:text-2xl block relative overflow-hidden
          transition-all duration-800 ease-out delay-200
          ${
            subtitleVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }
        `}
        >
          ～お客様の日常に、小さな幸せと、ほっとできる時間を～
          {/* テキストのハイライト効果 */}
          <span
            className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-Main-Brown-2/20 to-transparent
            transform -skew-x-12 transition-all duration-1500 ease-out delay-200
            ${
              subtitleVisible
                ? "translate-x-full opacity-100"
                : "-translate-x-full opacity-0"
            }
          `}
          ></span>
        </span>
      </div>

      {/* メインコンテンツ - パラグラフ別アニメーション */}
      <div
        className={`
        w-full text-center text-Main-Green-2 font-semibold font-['Noto_Serif_JP'] text-xs md:text-xl md:leading-9 space-y-2
        relative
        transition-all duration-1000 ease-out
        ${
          contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }
      `}
      >
        {/* 段落1 */}
        <p
          className={`
          transition-all duration-700 ease-out transform-gpu
          ${
            paragraphsVisible[0]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
          hover:text-Main-Green-1 hover:scale-105 relative group
        `}
        >
          <span className="relative z-10">
            お客様の毎日をちょっと明るくしてくれる、
            <br className="block md:hidden" />
            そんな&quot;ささやかな幸運&quot;になればと思っています。
          </span>

          {/* ホバー時の背景ハイライト */}
          <span className="absolute inset-0 bg-Main-Green-2/5 scale-0 group-hover:scale-110 transition-transform duration-300 rounded-lg opacity-0 group-hover:opacity-100"></span>
        </p>

        {/* 段落2 */}
        <p
          className={`
          transition-all duration-700 ease-out transform-gpu delay-100
          ${
            paragraphsVisible[1]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
          hover:text-Main-Green-1 hover:scale-105 relative group
        `}
        >
          <span className="relative z-10">
            スペインやフランスの地中海料理を中心に、
            <br />
            太陽と風を感じるような一皿を、
            <br className="block md:hidden" />
            カジュアルにご用意しております。
          </span>

          <span className="absolute inset-0 bg-Main-Brown-2/5 scale-0 group-hover:scale-110 transition-transform duration-300 rounded-lg opacity-0 group-hover:opacity-100"></span>
        </p>

        <br className="block md:hidden" />

        {/* 段落3 */}
        <p
          className={`
          transition-all duration-700 ease-out transform-gpu delay-200
          ${
            paragraphsVisible[2]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
          hover:text-Main-Green-1 hover:scale-105 relative group
        `}
        >
          <span className="relative z-10">
            食べることを楽しむのはもちろん、
          </span>
          <span className="absolute inset-0 bg-Main-Green-2/5 scale-0 group-hover:scale-110 transition-transform duration-300 rounded-lg opacity-0 group-hover:opacity-100"></span>
        </p>

        {/* 段落4 */}
        <p
          className={`
          transition-all duration-700 ease-out transform-gpu delay-300
          ${
            paragraphsVisible[3]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
          hover:text-Main-Green-1 hover:scale-105 relative group
        `}
        >
          <span className="relative z-10">
            大切な人との会話や、ひとり時間も心地よく過ごせるように。
          </span>
          <span className="absolute inset-0 bg-Main-Brown-2/5 scale-0 group-hover:scale-110 transition-transform duration-300 rounded-lg opacity-0 group-hover:opacity-100"></span>
        </p>

        {/* 段落5 */}
        <p
          className={`
          transition-all duration-700 ease-out transform-gpu delay-400
          ${
            paragraphsVisible[4]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
          hover:text-Main-Green-1 hover:scale-105 relative group
        `}
        >
          <span className="relative z-10">
            店内でのご提供に加え、ご自宅やオフィスでも
          </span>
          <span className="absolute inset-0 bg-Main-Green-2/5 scale-0 group-hover:scale-110 transition-transform duration-300 rounded-lg opacity-0 group-hover:opacity-100"></span>
        </p>

        {/* 段落6 */}
        <p
          className={`
          transition-all duration-700 ease-out transform-gpu delay-500
          ${
            paragraphsVisible[5]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
          hover:text-Main-Green-1 hover:scale-105 relative group
        `}
        >
          <span className="relative z-10">
            本格的な味を楽しんでいただける
            <br className="block md:hidden" />
            出張・ケータリングプランもご用意。
          </span>
          <span className="absolute inset-0 bg-Main-Brown-2/5 scale-0 group-hover:scale-110 transition-transform duration-300 rounded-lg opacity-0 group-hover:opacity-100"></span>
        </p>

        <br className="block md:hidden" />

        {/* 段落7 */}
        <p
          className={`
          transition-all duration-700 ease-out transform-gpu delay-600
          ${
            paragraphsVisible[6]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
          hover:text-Main-Green-1 hover:scale-105 relative group
        `}
        >
          <span className="relative z-10">
            ご家族との食事、記念日、企業パーティーなど、
            <br className="block md:hidden" />
            さまざまなシーンに合わせてご利用いただけます。
          </span>
          <span className="absolute inset-0 bg-Main-Green-2/5 scale-0 group-hover:scale-110 transition-transform duration-300 rounded-lg opacity-0 group-hover:opacity-100"></span>
        </p>

        {/* 段落8 - 最終段落には特別な効果 */}
        <p
          className={`
          transition-all duration-700 ease-out transform-gpu delay-700
          ${
            paragraphsVisible[7]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
          hover:text-Main-Green-1 hover:scale-110 relative group font-bold
        `}
        >
          <span className="relative z-10">
            温かく、心に残る時間をお届けします。
          </span>

          {/* 最終段落の特別なハイライト */}
          <span className="absolute inset-0 bg-gradient-to-r from-Main-Green-2/10 via-Main-Brown-2/10 to-Main-Green-2/10 scale-0 group-hover:scale-110 transition-transform duration-500 rounded-lg opacity-0 group-hover:opacity-100"></span>

          {/* キラキラエフェクト */}
          <span
            className={`
            absolute -top-1 -right-1 w-2 h-2 bg-Main-Green-2 rounded-full
            transition-all duration-500 ease-out delay-1000
            ${
              paragraphsVisible[7]
                ? "opacity-100 scale-100 animate-pulse"
                : "opacity-0 scale-0"
            }
          `}
          ></span>
        </p>

        {/* コンテンツ全体の装飾ライン */}
        <div
          className={`
          absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-Main-Brown-2 to-transparent
          transition-all duration-2000 ease-out delay-1000
          ${contentVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
        `}
        ></div>
      </div>
    </div>
  );
};

export default Content;
