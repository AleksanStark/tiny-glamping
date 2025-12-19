"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import SvgDollar from "@/icons/DollarIcon";
import SvgGuests from "@/icons/Guests";
import SvgSliderLeftArrow from "@/icons/SliderLeftArrow";
import SvgSliderRightArrow from "@/icons/SliderRightArrow";
import SvgPlus from "@/icons/Plus";
import HouseCard from "../HouseCard/HouseCard";

export default function Slider() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  const [isBegining, setIsBegining] = useState(false);
  const [isEnd, setEnd] = useState(false);

  return (
    <>
      <Swiper
        className="mb-4"
        spaceBetween={3}
        slidesPerView={1}
        modules={[Navigation]}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setIsBegining(swiper.isBeginning);
          setEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBegining(swiper.isBeginning);
          setEnd(swiper.isEnd);
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

        <SwiperSlide className="mb-3">
          <HouseCard price={1400} guests={5} image_path="/house6.jpg" />
        </SwiperSlide>

        <div className="flex-row-center gap-3">
          <button
            className={isBegining ? "opacity-40" : "opacity-100"}
            onClick={() => swiperInstance?.slidePrev()}
          >
            <SvgSliderLeftArrow />
          </button>
          <button
            className={isEnd ? "opacity-40" : "opacity-100"}
            onClick={() => swiperInstance?.slideNext()}
          >
            <SvgSliderRightArrow />
          </button>
        </div>
      </Swiper>
    </>
  );
}
