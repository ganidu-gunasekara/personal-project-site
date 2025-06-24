"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiShoppingCart } from "react-icons/fi";

type Props = { headerHeight: number };

export default function HeroSlider({ headerHeight }: Props) {
  const imageNames = ["slider-image-1", "slider-image-2", "slider-image-3"];

  function scrollToSection(id: string, offset = 0) {
    const element = document.getElementById(id);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    window.scrollTo({
      top: rect.top + scrollTop - offset,
      behavior: "smooth",
    });
  }



  return (
    <section
      style={{
        minHeight: `calc(100vh - ${headerHeight}px)`,
        maxHeight: '500px',
        aspectRatio: '16 / 9',
      }}
      className="w-full relative overflow-x-visible"
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
        {/* Button */}
        <div className="absolute bottom-[15%] md:bottom-[33%] left-1/2 transform -translate-x-1/2 z-10 button-tablet-fix button-large-range-fix button-mobile-landscape-fix">
          <div className="p-1 rounded-md border-2 border-white">
            <button className="flex items-center gap-2 px-6 py-3 rounded-md border border-white text-white font-semibold bg-transparent hover:bg-white hover:text-black transition shadow-lg text-sm md:text-base"
              onClick={() => scrollToSection("best-pick-section", headerHeight)}
            >
              <FiShoppingCart className="w-5 h-5" />
              Shop Now
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        {/* Pagination Dots */}
        <div className="absolute bottom-[10%] md:bottom-[31%] left-1/2 transform -translate-x-1/2 z-10 dots-tablet-fix dots-large-range-fix dots-mobile-landscape-fix">
          <div className="custom-swiper-pagination flex gap-2 justify-center items-center" />
        </div>


      </div>
    </section>
  );
}
