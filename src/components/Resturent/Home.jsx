import Activite from "./Activite";
import BestResturent from "./BestResturent";
import Category from "./Category";
import Feedback from "./Feedback";
import LatestTrend from "./LatestTrend";

function Home() {
  return (
    <>
      <Category />
      <BestResturent />
      <LatestTrend />
      <Feedback />
      <Activite />
    </>
  );
}

export default Home;
