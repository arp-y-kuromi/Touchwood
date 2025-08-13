import React from "react";
import MainVisual from "./components/MainVisual";
import Content from "./components/Content";
import MenuContent from "./menu/components/Content";
import ServiceContent from "./service/components/Content";

export default function Home() {
  return (
    <div className="md:min-h-screen">
      <MainVisual />
      <Content />
      <MenuContent />
      <ServiceContent />
    </div>
  );
}
