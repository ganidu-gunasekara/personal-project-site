"use client";

import { useRef } from "react";
import Header from "@/components/layout/Header";
import HeroSlider from "@/components/home/HeroSlider";
import useElementHeight from "@/hooks/useElementHeight";

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const headerHeight = useElementHeight(headerRef);

  return (
    <>
      <Header ref={headerRef} />
      <HeroSlider headerHeight={headerHeight} />
    </>
  );
}
