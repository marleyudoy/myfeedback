import { getAllData, getDataByRating } from "../../data/data"
import Category from "./Category"
import LatestTrend from "./LatestTrend"

function Home() {
  return (
    <>
      <Category/>
      <LatestTrend />
    </>
  )
}

export default Home