import Card from "../../Golbal/Card";
import { getAllData } from "../../data/data";

function LatestTrend() {
  const resturentData = getAllData();

  return (
    <section className="py-5 md:py-10">
      <div className="container pl-2 flex flex-col">
        <h1 className="text-[28px] text-center sm:text-start md:text-[32px] leading-[35px] md:leading-[40px] font-extrabold font-Lexend">
          The latest trends
        </h1>
        <div className="py-5 mt-3 self-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {resturentData &&
            resturentData.map((data) => <Card key={data.id} data={data} />)}
        </div>
      </div>
    </section>
  );
}

export default LatestTrend;
