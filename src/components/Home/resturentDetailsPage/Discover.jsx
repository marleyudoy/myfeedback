import React from "react";
import { getDataByRating } from "../../../data/data";
import SwipperSlider from "../../../Golbal/SwipperSlider";
import Card from "../../../Golbal/Card";
import { SwiperSlide } from "swiper/react";

function Discover() {
  const discoverData = getDataByRating(4);
  return (
    <section>

      <div className="container">
        <h1 className="text-center md:text-left text-[28px] md:text-[32px] font-bold font-Lexend">Also discover...</h1>
        <SwipperSlider
          breakPoint={{
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
          }}
        >
          {discoverData &&
            discoverData.map((item) => (
              <SwiperSlide key={item.id}>
                <Card data={item} />
              </SwiperSlide>
            ))}
        </SwipperSlider>
      </div>
    </section>
  );
}

export default Discover;
