import { useState } from "react";
import ImageSlider from "./ImageSlider";
import Grid from "../../../assets/grid.png";
import Button from "../../../Golbal/Button";

function ImageGorup({ images }) {
  const [isImgaeSlide, setIsImageSlider] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <div className="container relative grid grid-cols-2 md:grid-cols-4 justify-center items-center overflow-hidden gap-1 mt-[100px]">
        {images?.map((imgg, index) => {
          return (
            <div
              onClick={() => setIsImageSlider(true)}
              key={index}
              className={`w-[100%] h-[100%] overflow-hidden${
                index === 0
                  ? "col-span-4 md:col-span-2 md:row-span-2"
                  : "col-span-1 row-span-1"
              }`}
            >
              <img
                className={`w-[100%] h-[100%] cursor-pointer`}
                src={imgg}
                alt=""
              />
            </div>
          );
        })}
        <div className="absolute bottom-[10px] left-[12px] md:left-[20px]">
          <Button
            className="bg-white rounded-full"
            handleClick={() => setIsImageSlider(true)}
          >
            <img src={Grid} alt="" />
            View all photos {images.length}
          </Button>
        </div>
      </div>
      {isImgaeSlide && (
        <ImageSlider
          closeImageSlider={() => setIsImageSlider(false)}
          images={images}
        />
      )}
    </div>
  );
}

export default ImageGorup;
