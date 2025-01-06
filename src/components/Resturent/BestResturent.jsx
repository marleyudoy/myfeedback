import { getDataByRating } from "../../data/data";
import { SwiperSlide } from "swiper/react";
import Card from "../../Golbal/Card";
import SwipperSlider from "../../Golbal/SwipperSlider";

function BestResturent() {
  const resturentData = getDataByRating(5);

  return (
    <section>
      <div className="container relative bg-primary_color px-4 md:px-10 rounded-lg py-5 md:py-6 lg:pb-10">
        <h1 className="text-[28px] md:text-[32px] font-Lexend font-bold text-white">
          Find the best restaurant ratings below
        </h1>
        <SwipperSlider
          arrowLeft={true}
          arrowRight={true}
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
            1240: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {resturentData &&
            resturentData.map((data) => (
              <SwiperSlide key={data.id}>
                <Card data={data} />
              </SwiperSlide>
            ))}
        </SwipperSlider>
      </div>
    </section>
  );
}

export default BestResturent;
