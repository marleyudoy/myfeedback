import Button from "../../Golbal/Button";
import feedBack from "../../assets/feedback.png"

function Feedback() {
  return (
    <section className="py-4 md:py-6 lg:py-10 bg-[#F2F2F2]">
      <div className="container flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-12 justify-center lg:w-[70%] m-auto">
        <div className="flex-1">
          <h1 className="text-[22px] center_text md:text-[26px] font-lexend font-extrabold pb-2">
            MyFeedback for Business has resources to help you plan, start, grow,
            and advertise your small business
          </h1>
          <p className="paragraph_text center_text text-secondary_color2 py-3">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
        <Button className="bg-black mx-auto md:mx-0 text-white rounded-full">Explore MyFeedback business</Button>
        </div>
        <div className="flex-1">
          <div>
            <img src={feedBack} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
