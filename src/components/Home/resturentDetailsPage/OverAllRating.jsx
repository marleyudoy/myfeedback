import Star from "../../../Golbal/Star";
import Ratelogo from "../../../assets/ratelogo.png";
import Raterange from "../../../assets/raterange.png";

function OverAllRating() {
  return (
    <section className="py-10 border-b border-t">
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="flex gap-3 ">
          <div className="mt-2">
            <img src={Ratelogo} alt="" />
          </div>
          <div>
            <h1 className="text-[28px] md:text-[32px] font-lexend font-extrabold">
              Overall rating
            </h1>
            <p className="text-secondary_color2 py-1">834 Reviews</p>
          <div className="my-1 flex gap-1">
            <Star starCount={5} />
          </div>
          </div>
        </div>
        <div>
          <img src={Raterange} alt="" />
        </div>
      </div>
    </section>
  );
}

export default OverAllRating;
