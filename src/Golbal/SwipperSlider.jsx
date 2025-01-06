import { Swiper } from "swiper/react";
import arrowleft from "../assets/icons/arrowleft.png";
import arrowright from "../assets/icons/arrowright.png";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

function SwipperSlider({ children, arrowLeft, arrowRight,breakPoint }) {
  // const resturentData = getDataByRating(5)
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        breakpoints={breakPoint}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        className="mt-6"
      >
        {children}
      </Swiper>
      <div className="absolute bottom-[50%] translate-y-[50%] px-3 right-0 flex justify-between w-[100%] z-10">
        {arrowLeft && (
          <button className="prev absolute left-[12px] bg-white/40 px-1 py-1 md:px-2 md:py-2 rounded-full">
            <img src={arrowleft} alt="" />
          </button>
        )}
        {arrowRight && (
          <button className="next absolute right-[12px]  bg-white/40 px-1 py-1 md:px-2 md:py-2 rounded-full">
            <img src={arrowright} alt="" />
          </button>
        )}
      </div>
    </div>
  );
}

export default SwipperSlider;
