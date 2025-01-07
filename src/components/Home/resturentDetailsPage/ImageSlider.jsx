import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImageSlider = ({ images, closeImageSlider }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(thumbsSwiper)
  return (
    <div className=" w-[100%] sm:max-w-[70%] mx-auto fixed left-[50%] translate-x-[-50%] z-20 top-[10%] p-4 rounded-xl bg-gray-300">
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="rounded-lg overflow-hidden max-h-[400px]"
        loop={true}
        spaceBetween={10}
      >
        {images.map((image, index) => (
          <SwiperSlide className="overflow-hidden" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>


      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        className="mt-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-16 object-cover rounded-md cursor-pointer`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={closeImageSlider}
        className="bg-white absolute top-[10px] right-[5px] cursor-pointer z-20 w-[30px] h-[30px] flex items-center justify-center text-xl rounded-full font-bold"
      >
        X
      </div>
    </div>
  );
};

export default ImageSlider;
