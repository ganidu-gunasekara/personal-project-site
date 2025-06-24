"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiShoppingCart } from "react-icons/fi";
import { BiChevronsDown } from "react-icons/bi";

type Props = { headerHeight: number };

export default function HeroSlider({ headerHeight }: Props) {
  const imageNames = ["slider-image-1", "slider-image-2", "slider-image-3"];
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // On mount, set window width and update on resize
    const updateSize = () => setWindowWidth(window.innerWidth);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getSliderHeight = () => {
    if (windowWidth >= 1024) {
      return `calc(100vh - ${headerHeight}px)`; // full height on desktop
    } else {
      return `calc(60vh - ${headerHeight}px)`; // shorter height on tablets/mobiles
    }
  };

  const scrollToSection = (id: string, offset = 0) => {
    const element = document.getElementById(id);
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    window.scrollTo({
      top: rect.top + scrollTop - offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{ height: getSliderHeight() }}
      className="w-full relative overflow-hidden transition-all duration-300"
    >
      <div className="relative w-full h-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={1000}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
          className="w-full h-full"
        >
          {imageNames.map((name, index) => (
            <SwiperSlide key={index}>
              <picture className="w-full h-full block">
                <source
                  media="(max-width: 768px)"
                  srcSet={`/preview-images/mobile/${name}-mobile.jpg`}
                />
                <source
                  media="(min-width: 769px)"
                  srcSet={`/preview-images/desktop/${name}-desktop.jpg`}
                />
                <img
                  src={`/preview-images/desktop/${name}-desktop.jpg`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="absolute bottom-[15%] md:bottom-[33%] left-1/2 transform -translate-x-1/2 z-10 button-tablet-fix button-large-range-fix button-mobile-landscape-fix">
          <div className="p-1 rounded-md border-2 border-white">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-md border border-white text-white font-semibold bg-transparent hover:bg-white hover:text-black focus:bg-transparent focus:text-white transition shadow-lg text-sm md:text-base"
              onClick={() =>
                scrollToSection("best-pick-section", headerHeight)
              }
            >
              {windowWidth >= 1024 && (
                <BiChevronsDown className="w-6 h-6 animate-bounce mt-0.5" />
              )}
              Explore Best Picks
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-[10%] md:bottom-[31%] left-1/2 transform -translate-x-1/2 z-10 dots-tablet-fix dots-large-range-fix dots-mobile-landscape-fix">
          <div className="custom-swiper-pagination flex gap-2 justify-center items-center" />
        </div>
      </div>
    </section>
  );
}
