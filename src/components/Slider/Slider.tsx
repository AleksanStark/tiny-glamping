"use client";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";

import HouseCard from "../HouseCard/HouseCard";

export default function Slider({
  onSwiperReady,
  onStateChange,
}: {
  onSwiperReady: (swiper: SwiperClass) => void;
  onStateChange: (b: boolean, e: boolean) => void;
}) {
  return (
    <Swiper
      className="mb-4 lg:mb-8"
      spaceBetween={12}
      slidesPerView={1}
      onSlideChange={(swiper) => {
        onStateChange(swiper.isBeginning, swiper.isEnd);
      }}
      onSwiper={(swiper) => {
        onSwiperReady(swiper);
        onStateChange(swiper.isBeginning, swiper.isEnd);
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      <SwiperSlide>
        <HouseCard price={1500} guests={3} image_path="/house1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <HouseCard price={800} guests={4} image_path="/house2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <HouseCard price={1200} guests={2} image_path="/house3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <HouseCard price={600} guests={2} image_path="/house4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <HouseCard price={900} guests={3} image_path="/house5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <HouseCard price={1400} guests={5} image_path="/house6.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}
