import React from "react";
import { getDataByRating } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowleft from "../../assets/icons/arrowleft.png";
import arrowright from "../../assets/icons/arrowright.png";
import Card from "../../Golbal/Card";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

function BestResturent() {
  const resturentData = getDataByRating(5);

  return (
    <section>
      <div className="container relative bg-primary_color px-4 md:px-10 rounded-lg py-5 md:py-6 lg:pb-10">
        <h1 className="text-[28px] md:text-[32px] font-Lexend font-bold text-white">
          Find the best restaurant ratings below
        </h1>

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation,Autoplay]}
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          className="mt-6"
        >
          {resturentData &&
            resturentData.map((data) => (
              <SwiperSlide key={data.id}>
                <Card data={data} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="absolute bottom-[50%] translate-y-[50%] px-3 right-0 flex justify-between w-[100%] z-10">
          <button className="prev bg-white px-2 py-2 rounded-full">
            <img src={arrowleft} alt="" />
          </button>
          <button className="next bg-white px-2 py-2 rounded-full">
            <img src={arrowright} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BestResturent;
