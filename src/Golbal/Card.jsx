import { useNavigate } from "react-router";
import star from "../assets/icons/star.png";
import Star from "./Star";

function Card({ data, flexRow }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/home/${data.id}`, { state: data });
      }}
      key={data.id}
      className={`bg-[#F8F8F8] hover:cursor-pointer overflow-hidden pt-1 sm:pt-0 rounded-lg flex ${
        flexRow ? "flex-col md:flex-row gap-4  border-b" : "flex-col"
      } items-center`}
    >
      <div>
        <img className={`${flexRow && "w-full h-full md:w-[150px] md:h-[140px]"}`} src={data.thumbnail} alt="" />
      </div>
      <div className="px-2">
        <h3 className="text-[18px] md:text-[22px] font-Lexend font-bold py-2">
          {data.name}
        </h3>
        <p className="max-w-[300px] paragraph_text font-Lexend pb-2 text-secondary_color2">
          {data.description}
        </p>
        <div>
          <div className="flex mt-4 pb-1 gap-1">
            <Star starCount={data.ratting.rate} />
            <p className="ml-2 text-secondary_color2">
              <span className="text-sm  text-black font-extrabold">
                {data.ratting.rate}.0
              </span>
              ( {data.ratting.count} reviews )
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
