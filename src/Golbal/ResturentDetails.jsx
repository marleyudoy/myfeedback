import { useLocation } from "react-router";
import Star from "./Star";
import LocationImage from "../assets/icons/location.png";
import ClockImage from "../assets/icons/time.png";
import rLogo from "../assets/rlogo.png";
import menuImage from "../assets/icons/menu.png";
import call from "../assets/icons/whatsapp.png";
import loca from "../assets/icons/location.png";
import timeImg from "../assets/icons/time.png";
import browseimg from "../assets/icons/browse.png";
import location1 from "../assets/location1.png"

function ResturentDetails() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <section className="py-5">
        <h3 className="font-Lexend ml-5 sm:ml-10 pb-3 container font-semibold text-[16px]">
          Home / BellaItalia
        </h3>
        {/* hero section  */}
        <div className="bg-[url(/src/assets/dpCover.png)] bg-no-repeat bg-cover flex flex-col items-center h-[400px] relative">
          <div className="h-[400px] z-10 w-full absolute bg-gradient-to-r from-black/80 via-black/30 to-transparent top-0 left-0"></div>
          <div className="container relative">
            <div className="absolute ml-5 sm:ml-10 z-20 mt-6">
              <h1 className="text-[40px] sm:text-[44px] md:text-[52px] font-bold text-white">
                {state.name}
              </h1>
              {/* rarting */}
              <div className="flex mt-3 md:mt-5 gap-2">
                <div className="flex gap-1">
                  <Star starCount={state.ratting.rate} />
                </div>
                <div>
                  <span className="font-bold text-white">
                    {state.ratting.rate}.0
                  </span>
                  <span className="text-sm ml-1 text-white ">
                    ({state.ratting.count}reviews)
                  </span>
                </div>
              </div>
              {/* description */}
              <div className="w-[300px] my-4 text-white">
                <p>{state.description}</p>
              </div>
              {/* location and time  */}
              <div className="mt-5 md:mt-10">
                <div className="text-white/70 flex gap-5">
                  <img src={LocationImage} alt="" />
                  <p>{state.location}</p>
                </div>
                <div className="text-white/70 flex gap-5 mt-5">
                  <img src={ClockImage} alt="" />
                  <p>{state.time}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-20 bottom-[-80px]">
            <img src={rLogo} alt="" />
          </div>
        </div>
        {/* image group section  */}
        <div className="container grid grid-cols-2 md:grid-cols-4 justify-center items-center overflow-hidden gap-1 mt-[100px]">
          {state?.images?.map((imgg, index) => {
            return (
              <div
                key={index}
                className={`w-[100%] h-[100%] overflow-hidden${
                  index === 0
                    ? "col-span-4 md:col-span-2 md:row-span-2"
                    : "col-span-1 row-span-1"
                }`}
              >
                <img className={`w-[100%] h-[100%]`} src={imgg} alt="" />
              </div>
            );
          })}
        </div>

        {/* more information  */}
        <div className="container flex flex-col gap-5 md:flex-row justify-around mt-5 md:mt-8 lg:mt-10 py-5">
          <div className="">
            <h1 className="text-[28px] md:text-[34px] font-bold">
              More informations
            </h1>
            {/* menu */}
            <div className="mt-5">
              <div className="flex  gap-5 items-center py-4">
                <img className="w-[20px] h-[20px]" src={menuImage} alt="" />
                <p>See the menu</p>
              </div>
              <div className="flex  gap-5 items-center py-2">
                <img className="w-[20px] h-[20px]" src={call} alt="" />
                <p>{state.phone}</p>
              </div>
              <div className="flex  gap-5 items-center py-2">
                <img
                  className="w-[20px] h-[20px] bg-black rounded-full"
                  src={loca}
                  alt=""
                />
                <p>{state.location}</p>
              </div>
              <div className="flex  gap-5 items-center py-2">
                <img
                  className="w-[20px] h-[20px] bg-black rounded-full"
                  src={timeImg}
                  alt=""
                />
                <p>{state.time}</p>
              </div>
              <div className="flex  gap-5 items-center py-2">
                <img className="w-[20px] h-[20px]" src={menuImage} alt="" />
                <p>See the menu</p>
              </div>
              <div className="flex  gap-5 items-center py-2">
                <img className="w-[20px] h-[20px]" src={browseimg} alt="" />
                <p>{state.web}</p>
              </div>
            </div>
          </div>
          <div className="">
            <img className="w-[100%] h-[100%]" src={location1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ResturentDetails;
