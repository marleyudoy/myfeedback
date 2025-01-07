import { useLocation } from "react-router";

import DetailsHero from "./DetailsHero";
import ImageGorup from "./ImageGorup";
import MoreInfoSection from "./MoreInfoSection";
import Review from "./Review";
import Discover from "./Discover";
import OverAllRating from "./OverAllRating";

function ResturentDetails() {
  const { state } = useLocation();
  return (
    <>
      <section className="py-5">
        <div className="container">
          <h3 className="font-Lexend ml-5 sm:ml-10 pb-3 container font-semibold text-[16px]">
            Home / BellaItalia
          </h3>
        </div>
        <DetailsHero state={state} />
        <ImageGorup images={state.images} />
        <MoreInfoSection state={state} />
        <OverAllRating />
        <Review allReview={state.reviews} />
        <Discover />
      </section>
    </>
  );
}

export default ResturentDetails;
