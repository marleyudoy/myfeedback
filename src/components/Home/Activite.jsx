import { recentActivites } from "../../constants";
import user from "../../assets/icons/user.png";
import Star from "../../Golbal/Star";
import { SwiperSlide } from "swiper/react";
import SwipperSlider from "../../Golbal/SwipperSlider";

function Activite() {
  const activiteData = recentActivites;
  return (
    <section className="py-5 md:py-8 lg:py-14">
      <div className="container relative ">
        <h1 className="text-[28px] md:text-[32px] font-Lexend font-extrabold">
          Recents avtivities
        </h1>
        <SwipperSlider
        arrowRight={true}
          breakPoint={{
            540: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mt-5 md:mt-8"
        >
          {activiteData &&
            activiteData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="bg-[#F8F8F8] rounded-lg px-2 py-5">
                  <div className="flex items-center justify-start gap-4">
                    <img className="w-[20px]" src={user} alt="" />
                    <div>
                      <h3 className="text-[17px] md:text-[21px] font-bold font-Lexend">{data.userName}</h3>
                      <p className="text-xs text-secondary_color2">{data.location}</p>
                    </div>
                  </div>
                  <div className="flex mt-3 gap-2 py-3">
                    <div className="flex gap-1">
                      <Star starCount={data.ratting} />
                    </div>
                    <p className="text-xs text-secondary_color2">{data.date}</p>
                  </div>
                  <div className="mt-3 pb-5">
                    <p className="text-xs font-Lexend text-secondary_color2">{data.message}</p>
                  </div>
                  <div className="flex gap-2">
                    {data?.images?.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <a className="text-xs font-bold underline" href="#">Discover</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </SwipperSlider>
      </div>
    </section>
  );
}

export default Activite;
