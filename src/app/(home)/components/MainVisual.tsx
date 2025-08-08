"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainVisual: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // コンポーネントがマウントされた後、少し遅延してアニメーションを開始
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const images = [
    "/images/main1.JPG",
    "/images/service.jpeg",
    "/images/menu.JPG",
    "/images/main1.JPG",
    "/images/service.jpeg",
    "/images/menu.JPG",
  ];

  return (
    <div
      className={`w-full relative transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative w-full h-[60vh] md:h-[835px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 cursor-pointer inline-block"></span>`;
            },
          }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={image}
                  alt={`Main visual ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1920px"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-slide-prev,
        .swiper-slide-next {
          filter: grayscale(100%) brightness(0.8);
          transition: filter 0.2s ease;
          transform: scale(0.95);
        }

        @media (max-width: 1023px) {
          .swiper-slide-prev,
          .swiper-slide-next {
            filter: none;
            transform: none;
          }
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: white !important;
          transform: scale(1.1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </div>
  );
};

export default MainVisual;
