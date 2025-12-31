import SvgSliderLeftArrow from "@/icons/SliderLeftArrow";
import SvgSliderRightArrow from "@/icons/SliderRightArrow";
import { SwiperClass } from "swiper/react";

export default function SliderBtns({
  swiper,
  isBeginning,
  isEnd,
}: {
  swiper: SwiperClass | null;
  isBeginning: boolean;
  isEnd: boolean;
}) {
  return (
    <div className="flex justify-center lg:justify-end items-center gap-2 ">
      <button
        className={isBeginning ? "opacity-40" : "opacity-100"}
        onClick={() => swiper?.slidePrev()}
      >
        <SvgSliderLeftArrow />
      </button>
      <button
        className={isEnd ? "opacity-40" : "opacity-100"}
        onClick={() => swiper?.slideNext()}
      >
        <SvgSliderRightArrow />
      </button>
    </div>
  );
}
