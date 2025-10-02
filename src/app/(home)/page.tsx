import React from "react";
import MainVisual from "./components/MainVisual";
import MenuContent from "./menu/components/Content";
import { ServiceSection } from "./service";

export default function Home() {
  return (
    <div className="md:min-h-screen">
      <MainVisual />
      <MenuContent />
      <ServiceSection />
    </div>
  );
}
