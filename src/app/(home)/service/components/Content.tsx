"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  note: string;
  imageSrc: string;
  imageAlt: string;
}

const serviceData: ServiceItem[] = [
  {
    id: "catering-service",
    title: "出張料理",
    subtitle: "【プロの味を、あなただけの空間で】",
    description: (
      <>
        特別なひとときにふさわしい、レストランの味を、ご自宅で。
        旬の食材を贅沢に使い、シェフが目の前で仕上げるコース料理。
        <br className="md:block hidden" />
        大切な記念日、ホームパーティー、企業の接待など、お客様のご希望に合わせたオーダーメイドの料理をご提供します。
        <br className="md:block hidden" />
        「お店まで行けないけれど、きちんとおもてなしがしたい」「ゆっくりと人目を気にせず過ごしたい」そんな方のための、特別な出張料理サービスです。
        <br className="md:block hidden" />
        お気軽にご相談ください。お見積り・ご提案は無料で承っております。
      </>
    ),
    note: "※アレルギー食材等ございましたら、ご予約時にお申し付けください。",
    imageSrc: "/images/service.jpeg",
    imageAlt: "Service Image",
  },
  {
    id: "event-catering",
    title: "ケータリング",
    subtitle: "【イベント・パーティーを彩る本格ケータリングサービス】",
    description: (
      <>
        華やかに、上質に、そして心地よく。大切なご宴席やイベントに、プロの味とサービスをお届けします。
        <br className="md:block hidden" />
        企業パーティー、レセプション、ウェディング二次会、周年イベントなど、20名〜100名以上の大規模なケータリングにも柔軟に対応。旬の食材を活かしたビュッフェ形式から、フィンガーフードまで。
        <br className="md:block hidden" />
        シーンに合わせてトータルにプロデュースいたします。ご希望のスタイル・ご予算に応じたプランをご提案します。まずはお気軽にご相談ください。
      </>
    ),
    note: "※アレルギー食材等ございましたら、ご予約時にお申し付けください。",
    imageSrc: "/images/menu.JPG",
    imageAlt: "Menu Image",
  },
];

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  isVisible,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const imageDelay = index * 300;
      const contentDelay = index * 300 + 400;

      const imageTimer = setTimeout(() => setImageLoaded(true), imageDelay);
      const contentTimer = setTimeout(
        () => setContentVisible(true),
        contentDelay
      );

      return () => {
        clearTimeout(imageTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [isVisible, index]);

  return (
    <article className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 group mb-8 lg:mb-16 last:mb-0">
      {/* 画像セクション - 左側 */}
      <div
        className={`
          relative h-48 lg:h-80 lg:w-1/2 flex justify-center items-center bg-System-Gray-White overflow-hidden rounded-none
          transition-all duration-1000 ease-out transform-gpu perspective-1000
          ${
            imageLoaded
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-75 -translate-x-8"
          }
          hover:scale-105 hover:shadow-2xl hover:rotate-1
        `}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-Main-Green-2/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          className={`
            object-cover transition-all duration-700 ease-out
            ${imageLoaded ? "filter-none" : "blur-sm grayscale"}
            group-hover:scale-110
          `}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* 光のエフェクト */}
        <div
          className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
          transform -skew-x-12 transition-all duration-1000 ease-out
          ${imageLoaded ? "translate-x-full" : "-translate-x-full"}
        `}
        ></div>
      </div>

      {/* コンテンツセクション - 右側 */}
      <div
        className={`
        bg-System-Gray-White px-4 lg:px-10 py-6 lg:py-8 rounded-lg flex flex-col gap-4 lg:gap-6 lg:w-1/2 justify-center
        transition-all duration-800 ease-out transform-gpu
        ${
          contentVisible
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-8 scale-95"
        }
        hover:shadow-lg hover:-translate-y-1
        relative overflow-hidden
      `}
      >
        {/* 背景のパルスエフェクト */}
        <div className="absolute inset-0 bg-gradient-to-br from-Main-Green-2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <header
          className={`
          flex flex-col gap-3 lg:gap-4 relative z-10
          transition-all duration-600 ease-out
          ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }
        `}
        >
          <h3
            className={`
            text-xl lg:text-3xl text-Main-Green-2 font-bold
            transition-all duration-500 ease-out
            hover:text-Main-Green-1 hover:scale-105 transform-gpu
          `}
          >
            {service.title}
          </h3>
          <h4
            className={`
            text-base lg:text-xl text-Main-Green-2 font-bold leading-snug
            transition-all duration-500 ease-out delay-100
            ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
          >
            {service.subtitle}
          </h4>
        </header>

        <div
          className={`
          flex flex-col gap-3 lg:gap-4 relative z-10
          transition-all duration-700 ease-out delay-200
          ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }
        `}
        >
          <p
            className={`
            text-sm lg:text-base text-Main-Green-2 font-bold leading-snug
            transition-all duration-500 ease-out
            hover:text-Main-Green-1
          `}
          >
            {service.description}
          </p>
          <p
            className={`
            text-xs lg:text-sm text-Main-Brown-2 font-semibold leading-tight
            transition-all duration-500 ease-out delay-300
            ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }
          `}
          >
            {service.note}
          </p>
        </div>

        {/* 装飾的なアクセント */}
        <div
          className={`
          absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-Main-Green-2 to-Main-Brown-2
          transform origin-left transition-all duration-1000 ease-out
          ${contentVisible ? "scale-x-100" : "scale-x-0"}
        `}
        ></div>
      </div>
    </article>
  );
};

const ServiceSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // タイトルのアニメーションを少し遅らせる
          setTimeout(() => setTitleVisible(true), 200);
        }
      },
      {
        threshold: 0.1,
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
    <section
      ref={elementRef}
      className="my-6 lg:my-10 font-['Noto_Serif_JP'] overflow-hidden"
    >
      <div className="px-4 lg:px-20 flex flex-col gap-8 lg:gap-16">
        <header>
          <h2 className="text-Main-Green-2 text-xl lg:text-5xl font-black font-['Noto_Serif_JP'] text-center lg:text-left">
            Service
          </h2>
        </header>

        {/* カードセクション - 縦並び */}
        <div className="flex flex-col">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* セクション全体の装飾的背景 */}
      <div
        className={`
        fixed inset-0 pointer-events-none z-0
        bg-gradient-radial from-Main-Green-2/5 via-transparent to-transparent
        transition-opacity duration-2000 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      ></div>
    </section>
  );
};

export default ServiceSection;
