"use client";

import { useRef } from "react";
import HeroSlider from "@/components/home/HeroSlider";
import useElementHeight from "@/hooks/useElementHeight";
import BestPicksSection from "@/components/home/BestPicksSection";
import BrandStorySection from "@/components/home/BrandStorySection";
import MinimallDropMessage from "@/components/home/MinimalDropMessage";
import MovementBanner from "@/components/home/MovementBanner";

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const headerHeight = useElementHeight(headerRef);

  return (
    <div style={{ paddingTop: headerHeight }}>
      <HeroSlider headerHeight={headerHeight} />
      <BestPicksSection />
      <BrandStorySection />
      <MinimallDropMessage />
      <MovementBanner />
    </div>
  );
}
