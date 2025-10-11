"use client";
import React from "react";
import { serviceData } from "../data/serviceData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ServiceCard from "./ServiceCard";

const ServiceSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className="w-full px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 md:py-12 lg:py-16"
    >
      <div className="mx-auto flex flex-col gap-6 md:gap-8 lg:gap-12">
        <h2 className="text-Main-Green-2 text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-['Noto_Serif_JP'] leading-tight">
          Service
        </h2>
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
              url={
                index === 0
                  ? "https://docs.google.com/forms/d/e/1FAIpQLScrWhwHv1l7v2Ec8GxuUNEabyfxwOMZlSK4CkQMKVi6mChnOQ/viewform"
                  : "https://docs.google.com/forms/d/e/1FAIpQLSdQQhOFdOAE85lfm280cLGm1jfmvJ24EE2Vrdv2vrgsGUpsRQ/viewform"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
