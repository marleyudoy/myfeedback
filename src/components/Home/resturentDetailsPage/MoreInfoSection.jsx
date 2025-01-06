import location1 from "../../../assets/location1.png";
import menu from "../../../assets/icons/menu.png";
import call from "../../../assets/icons/whatsapp.png";
import Location from "../../../assets/icons/location.png";
import Time from "../../../assets/icons/time.png";
import Browser from "../../../assets/icons/browse.png";


function MoreInfoSection({state}) {
  return (
    <div className="container flex flex-col gap-5 md:flex-row justify-around mt-5 md:mt-8 lg:mt-10 py-5">
    <div className="">
      <h1 className="text-[28px] md:text-[34px] font-bold">
        More informations
      </h1>
      <div className="mt-5">
        <div className="flex  gap-5 items-center py-4">
          <img className="w-[20px] h-[20px]" src={menu} alt="" />
          <p>See the menu</p>
        </div>
        <div className="flex  gap-5 items-center py-2">
          <img className="w-[20px] h-[20px]" src={call} alt="" />
          <p>{state.phone}</p>
        </div>
        <div className="flex  gap-5 items-center py-2">
          <img
            className="w-[20px] h-[20px] bg-black rounded-full"
            src={Location}
            alt=""
          />
          <p>{state.location}</p>
        </div>
        <div className="flex  gap-5 items-center py-2">
          <img
            className="w-[20px] h-[20px] bg-black rounded-full"
            src={Time}
            alt=""
          />
          <p>{state.time}</p>
        </div>
        <div className="flex  gap-5 items-center py-2">
          <img className="w-[20px] h-[20px]" src={Browser} alt="" />
          <p>{state.web}</p>
        </div>
        <div className="flex gap-4 mt-5">
          {state.contact.map((con, ind) => (
            <img
              className="w-[20px] h-[20px]"
              key={ind}
              src={con}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
    <div className="">
      <img className="w-[100%] h-[100%]" src={location1} alt="" />
    </div>
  </div>
  )
}

export default MoreInfoSection