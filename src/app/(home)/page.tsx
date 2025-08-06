import React from "react";
import MainVisual from "./components/MainVisual";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="md:min-h-screen">
      <MainVisual />
      <Content />
    </div>
  );
}
