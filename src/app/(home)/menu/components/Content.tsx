"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface MenuCourse {
  id: string;
  title: string;
  items: string;
  price: string;
  description: string;
  note?: string;
}

const menuCourses: MenuCourse[] = [
  {
    id: "casual-course",
    title: "カジュアルコース",
    items: "4~5品",
    price: "6,000円",
    description: "アミューズ、前菜2品、メイン（豚or鴨）、デザート",
    note: "※メインは、プラス1500円で和牛に変更可能です。",
  },
  {
    id: "standard-course",
    title: "スタンダードコース",
    items: "7品",
    price: "8,000円",
    description:
      "アミューズ、前菜2品、温菜、メイン（豚or鴨）お米料理、デザート",
    note: "※メインは、プラス1500円で和牛に変更可能です。",
  },
  {
    id: "special-course",
    title: "スペシャルコース",
    items: "9品",
    price: "10,000円",
    description:
      "アミューズ2品、前菜2品、温菜、メイン（和牛）、お米料理、デザート、茶菓子",
  },
];

const menuImages = [
  "/images/menu.JPG",
  "/images/course1.jpeg",
  "/images/course2.jpeg",
];

const allergyNote =
  "※アレルギー食材等ございましたら、ご予約時にお申し付けください。";

interface MenuCardProps {
  course: MenuCourse;
  isMobile?: boolean;
  index: number;
  isVisible: boolean;
}

const MenuCard: React.FC<MenuCardProps> = ({
  course,
  isMobile = false,
  index,
  isVisible,
}) => {
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const delay = index * 150;
      setTimeout(() => setCardVisible(true), delay);
    }
  }, [isVisible, index]);

  const cardClasses = isMobile
    ? "border-b border-System-Gray-Gray-4 py-4 last:border-b-0"
    : "border-b border-System-Gray-Gray-4 pb-6";

  const titleClasses = isMobile
    ? "text-sm font-bold text-Main-Green-2"
    : "text-xl font-bold text-Main-Green-2";

  const priceClasses = isMobile
    ? "flex gap-4 text-sm font-bold text-Main-Green-2"
    : "flex gap-4 text-xl font-bold text-Main-Green-2";

  const descriptionClasses = isMobile
    ? "text-xs font-bold text-Main-Brown-2 leading-snug"
    : "text-base font-bold text-Main-Brown-2 mb-1";

  const noteClasses = isMobile
    ? "text-[10px] font-bold text-Main-Brown-2 leading-tight"
    : "text-sm font-bold text-Main-Brown-2";

  return (
    <div
      className={`
      ${cardClasses} 
      group relative overflow-hidden
      transition-all duration-700 ease-out transform-gpu
      ${
        cardVisible
          ? "opacity-100 translate-x-0 scale-100"
          : "opacity-0 -translate-x-8 scale-95"
      }
      hover:translate-x-2 hover:bg-System-Gray-White/50 hover:shadow-lg
    `}
    >
      {/* カードのアクセントライン */}
      <div
        className={`
        absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-Main-Green-2 to-Main-Brown-2
        transform origin-top transition-all duration-500 ease-out
        ${cardVisible ? "scale-y-100" : "scale-y-0"}
        group-hover:w-2 group-hover:shadow-lg
      `}
      ></div>

      <div className="pl-4 relative z-10">
        <div className="flex justify-between items-center mb-2">
          <h3
            className={`
            ${titleClasses}
            transition-all duration-500 ease-out
            ${
              cardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }
            group-hover:text-Main-Green-1 group-hover:scale-105 transform-gpu
          `}
          >
            {course.title}
          </h3>
          <div
            className={`
            ${priceClasses}
            transition-all duration-500 ease-out delay-100
            ${
              cardVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }
            group-hover:scale-110 transform-gpu
          `}
          >
            <span className="relative">
              {course.items}
              <span className="absolute inset-0 bg-Main-Green-2/10 scale-0 group-hover:scale-110 transition-transform duration-300 rounded-full -z-10"></span>
            </span>
            <span className="font-black relative">
              {course.price}
              <span className="absolute inset-0 bg-Main-Brown-2/10 scale-0 group-hover:scale-110 transition-transform duration-300 rounded-full -z-10"></span>
            </span>
          </div>
        </div>

        <p
          className={`
          ${descriptionClasses}
          transition-all duration-600 ease-out delay-200
          ${
            cardVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }
          group-hover:text-Main-Brown-1
        `}
        >
          {course.description}
        </p>

        {course.note && (
          <p
            className={`
            ${noteClasses}
            transition-all duration-600 ease-out delay-300
            ${
              cardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }
            group-hover:text-Main-Brown-1
          `}
          >
            {course.note}
          </p>
        )}
      </div>

      {/* ホバー時の背景エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-Main-Green-2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

const MenuImage: React.FC<{ isMobile?: boolean; isVisible: boolean }> = ({
  isMobile = false,
  isVisible,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setImageLoaded(true), 300);
    }
  }, [isVisible]);

  // 画像スライダーのタイマー
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % menuImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (isMobile) {
    return (
      <div className="flex justify-center">
        <div
          className={`
          relative h-52 w-72 group
          transition-all duration-1000 ease-out transform-gpu
          ${
            imageLoaded
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-90 rotate-3"
          }
          hover:scale-105 hover:-rotate-1 hover:shadow-2xl
        `}
        >
          {/* 背景の影 */}
          <div
            className={`
            absolute top-6 left-6 w-full h-48 bg-Main-Brown-3 z-0
            transition-all duration-800 ease-out
            ${
              imageLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 translate-x-2 translate-y-2"
            }
            group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-Main-Brown-2
          `}
          />

          <div className="relative w-full h-48 overflow-hidden z-10">
            {/* 画像スライダー */}
            {menuImages.map((src, imgIndex) => (
              <Image
                key={imgIndex}
                src={src}
                alt="Menu Image"
                width={288}
                height={192}
                className={`
                  absolute inset-0 w-full h-48 object-cover
                  transition-all duration-700 ease-out
                  ${imageLoaded ? "filter-none" : "blur-sm brightness-75"}
                  ${
                    imgIndex === currentImageIndex ? "opacity-100" : "opacity-0"
                  }
                  group-hover:scale-110 group-hover:brightness-110
                `}
              />
            ))}

            {/* 光のエフェクト */}
            <div
              className={`
              absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent 
              transform -skew-x-12 transition-all duration-1200 ease-out z-20
              ${
                imageLoaded
                  ? "translate-x-full opacity-100"
                  : "-translate-x-full opacity-0"
              }
            `}
            ></div>

            {/* オーバーレイエフェクト */}
            <div className="absolute inset-0 bg-gradient-to-t from-Main-Green-2/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
      relative w-full max-w-[800px] mx-auto group
      transition-all duration-1200 ease-out transform-gpu
      ${
        imageLoaded
          ? "opacity-100 scale-100 rotate-0"
          : "opacity-0 scale-95 rotate-2"
      }
      hover:scale-105 hover:-rotate-1 hover:shadow-2xl
    `}
    >
      {/* 背景の影 */}
      <div
        className={`
        absolute left-8 top-8 w-full h-full bg-Main-Brown-3 z-0
        transition-all duration-1000 ease-out
        ${
          imageLoaded
            ? "opacity-100 translate-x-0 translate-y-0"
            : "opacity-0 translate-x-4 translate-y-4"
        }
        group-hover:translate-x-4 group-hover:translate-y-4 group-hover:bg-Main-Brown-2
      `}
      />

      <div className="relative w-full aspect-[16/10] overflow-hidden z-10">
        {/* 画像スライダー */}
        {menuImages.map((src, imgIndex) => (
          <Image
            key={imgIndex}
            src={src}
            alt="Menu Image"
            fill
            className={`
              object-cover
              transition-all duration-800 ease-out
              ${imageLoaded ? "filter-none" : "blur-sm brightness-75"}
              ${imgIndex === currentImageIndex ? "opacity-100" : "opacity-0"}
              group-hover:scale-110 group-hover:brightness-110
            `}
          />
        ))}

        {/* 光のエフェクト */}
        <div
          className={`
          absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent 
          transform -skew-x-12 transition-all duration-1500 ease-out z-20
          ${
            imageLoaded
              ? "translate-x-full opacity-100"
              : "-translate-x-full opacity-0"
          }
        `}
        ></div>

        {/* フレームエフェクト */}
        <div className="absolute inset-0 border-2 border-Main-Green-2/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15"></div>

        {/* オーバーレイエフェクト */}
        <div className="absolute inset-0 bg-gradient-to-t from-Main-Green-2/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15"></div>
      </div>
    </div>
  );
};

const DesktopMenuSection: React.FC<{ isVisible: boolean }> = ({
  isVisible,
}) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setTitleVisible(true), 100);
      setTimeout(() => setContentVisible(true), 400);
    }
  }, [isVisible]);

  return (
    <div className="hidden lg:block font-['Noto_Serif_JP'] overflow-hidden">
      <div className="max-w-screen mx-auto px-20 py-16">
        <header className="mb-12">
          <h2 className="text-Main-Green-2 text-5xl font-black font-['Noto_Serif_JP']">
            Menu
          </h2>
        </header>

        <div
          className={`
          flex gap-16 justify-center items-center
          transition-all duration-1000 ease-out
          ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }
        `}
        >
          {/* メニューカード - 40%の幅 */}
          <div
            className={`
            w-[40%] bg-System-Gray-White p-6 rounded-md space-y-8 bg-white relative overflow-hidden
            transition-all duration-800 ease-out transform-gpu
            ${
              contentVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-12 scale-95"
            }
            hover:shadow-2xl hover:-translate-y-2
          `}
          >
            {/* カードの背景エフェクト */}
            <div className="absolute inset-0 bg-gradient-to-br from-Main-Green-2/5 via-transparent to-Main-Brown-2/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10">
              {menuCourses.map((course, index) => (
                <MenuCard
                  key={course.id}
                  course={course}
                  index={index}
                  isVisible={contentVisible}
                />
              ))}

              <p
                className={`
                text-sm font-semibold text-Main-Brown-2 mt-4
                transition-all duration-700 ease-out delay-500
                ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
                hover:text-Main-Brown-1
              `}
              >
                {allergyNote}
              </p>
            </div>

            {/* カードの装飾ライン */}
            <div
              className={`
              absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-Main-Green-2 via-Main-Brown-2 to-Main-Green-2
              transform origin-left transition-all duration-1000 ease-out
              ${contentVisible ? "scale-x-100" : "scale-x-0"}
            `}
            ></div>
          </div>

          {/* 画像 - 60%の幅 */}
          <div
            className={`
            w-[60%] flex justify-center
            transition-all duration-1000 ease-out delay-200 transform-gpu
            ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }
          `}
          >
            <MenuImage isVisible={contentVisible} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileMenuSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setTitleVisible(true), 200);
      setTimeout(() => setContentVisible(true), 500);
    }
  }, [isVisible]);

  return (
    <div className="lg:hidden font-['Noto_Serif_JP'] pb-10 overflow-hidden">
      {/* 画像 */}
      <div
        className={`
        px-4 py-5
        transition-all duration-1000 ease-out
        ${
          contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8"
        }
      `}
      >
        <MenuImage isMobile isVisible={contentVisible} />
      </div>

      {/* タイトル */}
      <header className="py-6 relative">
        <h2
          className={`
          text-xl font-black text-Main-Green-2 text-center
          transition-all duration-1000 ease-out transform-gpu
          ${
            titleVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-110"
          }
          hover:text-Main-Green-1 hover:scale-105
          relative z-10
        `}
          style={{
            textShadow: titleVisible ? "1px 1px 2px rgba(0,0,0,0.1)" : "none",
          }}
        >
          Menu
        </h2>

        {/* モバイル用装飾ライン */}
        <div
          className={`
          absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-Main-Green-2 to-transparent
          transition-all duration-1200 ease-out
          ${titleVisible ? "w-16 opacity-100" : "w-0 opacity-0"}
        `}
        ></div>
      </header>

      {/* メニューカード */}
      <div
        className={`
        px-4 py-6 bg-System-Gray-White mx-4 rounded-md space-y-4 relative overflow-hidden
        transition-all duration-800 ease-out transform-gpu
        ${
          contentVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }
        hover:shadow-lg hover:-translate-y-1
      `}
      >
        {/* カードの背景エフェクト */}
        <div className="absolute inset-0 bg-gradient-to-br from-Main-Green-2/5 via-transparent to-Main-Brown-2/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          {menuCourses.map((course, index) => (
            <MenuCard
              key={course.id}
              course={course}
              isMobile
              index={index}
              isVisible={contentVisible}
            />
          ))}

          <p
            className={`
            text-[10px] font-semibold text-Main-Brown-2 mt-4
            transition-all duration-600 ease-out delay-400
            ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }
          `}
          >
            {allergyNote}
          </p>
        </div>

        {/* カードの装飾ライン */}
        <div
          className={`
          absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-Main-Green-2 via-Main-Brown-2 to-Main-Green-2
          transform origin-left transition-all duration-1000 ease-out
          ${contentVisible ? "scale-x-100" : "scale-x-0"}
        `}
        ></div>
      </div>
    </div>
  );
};

const MenuSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <div ref={elementRef} className="relative">
      <DesktopMenuSection isVisible={isVisible} />
      <MobileMenuSection isVisible={isVisible} />

      {/* セクション全体の装飾的背景 */}
      <div
        className={`
        absolute inset-0 pointer-events-none z-0
        bg-gradient-radial from-Main-Brown-2/5 via-transparent to-transparent
        transition-opacity duration-2000 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      ></div>
    </div>
  );
};

export default MenuSection;
