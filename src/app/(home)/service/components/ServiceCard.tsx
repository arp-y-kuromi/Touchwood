"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Course {
  name: string;
  price?: string;
  details: string;
}

interface Service {
  imageSrc: string[];
  imageAlt: string;
  title: string;
  courses: Course[];
  content: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
  url: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  isVisible,
  url,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // 画像スライダーのタイマー
  useEffect(() => {
    if (!isVisible || service.imageSrc.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % service.imageSrc.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, service.imageSrc.length]);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-stretch">
      {/* 画像セクション */}
      <div
        className={`
          w-full md:w-1/2 lg:w-2/5 xl:w-1/2
          aspect-square md:aspect-auto md:min-h-[400px] lg:min-h-[500px]
          relative overflow-hidden
          transition-all duration-1000 ease-out
          ${
            imageLoaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-md scale-95"
          }
        `}
      >
        {/* 画像スライダー */}
        {service.imageSrc.map((src, imgIndex) => (
          <Image
            key={imgIndex}
            className={`
              object-cover object-center w-full h-full
              transition-all duration-1000 ease-in-out
              ${
                imgIndex === currentImageIndex
                  ? "opacity-100 z-[5]"
                  : "opacity-0 z-[1]"
              }
            `}
            src={src}
            alt={service.imageAlt}
            fill
            priority={imgIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        ))}
      </div>

      {/* コンテンツセクション */}
      <div
        className={`
          w-full md:w-1/2 lg:w-3/5 xl:w-1/2
          px-4 py-6 md:px-6 lg:px-8 xl:px-10
          bg-System-Gray-White 
          flex flex-col justify-center items-start gap-4 md:gap-6
          transition-all duration-800 ease-out
          relative
          ${
            contentVisible
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-sm scale-95"
          }
        `}
      >
        {/* タイトル */}
        <h3 className="text-Main-Green-2 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold font-['Noto_Serif_JP'] leading-tight">
          {service.title}
        </h3>

        {/* 説明メッセージエリア - 追加 */}
        {service.content && (
          <div className="w-full px-3 md:px-4 lg:px-6 py-4 rounded-lg">
            <p className="text-Main-Brown-2 text-sm md:text-base font-normal font-['Noto_Serif_JP'] leading-relaxed whitespace-pre-line">
              {service.content}
            </p>
          </div>
        )}

        {/* コースリスト */}
        <div className="w-full flex flex-col">
          {service.courses.map((course, courseIndex) => (
            <React.Fragment key={courseIndex}>
              <div className="w-full">
                <div className="w-full p-3 md:p-4 lg:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
                  <h4 className="flex-1 text-Main-Green-2 text-base sm:text-lg md:text-lg lg:text-xl font-bold font-['Noto_Serif_JP'] leading-snug">
                    {course.name}
                  </h4>
                  {course.price && (
                    <div className="flex-shrink-0">
                      <div className="text-Main-Green-2 text-base sm:text-lg md:text-lg lg:text-xl font-bold font-['Noto_Serif_JP'] leading-snug">
                        {course.price}
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full px-3 md:px-4 lg:px-6 pb-4 lg:pb-6">
                  <p className="text-Main-Brown-2 text-sm md:text-base font-bold font-['Noto_Serif_JP'] leading-relaxed whitespace-pre-line">
                    {course.details}
                  </p>
                </div>
              </div>
              {courseIndex < service.courses.length - 1 && (
                <div className="w-full border-b border-System-Gray-Gray-4 mx-3 md:mx-4 lg:mx-6" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Contactボタン - 右下に配置 */}
        <div className="w-full flex justify-end">
          <a
            href={url}
            className="mt-5 px-6 py-2 bg-Main-Green-2 rounded-full text-System-Gray-White text-xl font-black hover:bg-Main-Green-3 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
