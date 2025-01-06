import Star from "../../../Golbal/Star";
import LocationImage from "../../../assets/icons/location.png";
import ClockImage from "../../../assets/icons/time.png";
import rLogo from "../../../assets/rlogo.png";


function DetailsHero({ state }) {
  return (
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
  );
}

export default DetailsHero;
