"use client";

import { useRef } from "react";
import Header from "@/components/layout/Header";
import HeroSlider from "@/components/home/HeroSlider";
import useElementHeight from "@/hooks/useElementHeight";
import BestPicksSection from "@/components/home/BestPicksSection";

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const headerHeight = useElementHeight(headerRef);

  return (
    <>
      <Header ref={headerRef} />

      <div style={{ paddingTop: headerHeight }}>
        <HeroSlider headerHeight={headerHeight} />
        <BestPicksSection />
      </div>
    </>

  );
}
