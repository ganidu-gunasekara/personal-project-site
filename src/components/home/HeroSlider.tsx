"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

type Props = { headerHeight: number };

export default function HeroSlider({ headerHeight }: Props) {
  const images = [
    "/preview-images/preview-image-1.jpg",
    "/preview-images/preview-image-2.jpg",
    "/preview-images/preview-image-3.jpg",
  ];

  return (
    <section
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
      className="w-full overflow-x-visible overflow-y-hidden"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={1000}
        slidesPerView={1}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center bg-black" >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
