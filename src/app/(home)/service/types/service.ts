import React from "react";

export interface CourseItem {
  name: string;
  price: string;
  details: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: React.ReactNode | null;
  note: string;
  imageSrc: string[];
  imageAlt: string;
  courses: CourseItem[];
}

export interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  isVisible: boolean;
}
