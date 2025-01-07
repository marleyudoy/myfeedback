import { useLocation } from "react-router";
import { resturentList } from "../data/data";
import Map from "../assets/map.png";
import sortImg from "../assets/icons/sort.png";
import Card from "../Golbal/Card";
import Button from "../Golbal/Button";
import Sort from "./Home/resturentDetailsPage/Sort";
import { useState } from "react";

function SearchContent() {
  const [isSort, setIsSort] = useState(false);
  const [isSrotValue, setIsSortValue] = useState(false);
  const { state } = useLocation();

  const mainData = () => {
    const countryFilteredData = state.countryName
      ? resturentList.filter((item) => {
          if (
            item.location
              .toLocaleLowerCase()
              .includes(state.countryName.toLocaleLowerCase())
          ) {
            return item;
          }
        })
      : resturentList;

    const filteredD = state.title
      ? countryFilteredData.filter((item) => {
          if (
            item.name
              .toLocaleLowerCase()
              .includes(state.title.toLocaleLowerCase())
          ) {
            return item;
          }
        })
      : countryFilteredData;
    return filteredD;
  };

  const filteredData = mainData().sort((a, b) => {
    if (isSrotValue) {
      return a.ratting.count - b.ratting.count;
    } else {
      return b.ratting.count - a.ratting.count;
    }
  });

  const handleSort = (value) => {
    setIsSortValue(value);
    setIsSort(false);
  };
  return (
    <section className="py-4">
      <div className="container mt-5 flex gap-5 flex-col lg:flex-row">
        <div className="flex-1">
          <div>
            <h3 className="font-semibold text-sm">Home / All restaurants</h3>
            <div className="flex  my-5 gap-5">
              <h1 className="text-[28px]  md:text-[32px] font-Lexend font-bold">
                best restaurants in singapore
              </h1>
              <span
                onClick={() => setIsSort(!isSort)}
                className="flex relative items-center justify-center gap-2 border border-gray-900 w-[80px] px-4 h-[40px]  rounded-full"
              >
                <img className="w-[20px]" src={sortImg} alt="" /> Sort
                {isSort && <Sort onSort={handleSort} />}
              </span>
            </div>
            {filteredData.length > 0 ? (
              <div className="space-y-5 ">
                {filteredData &&
                  filteredData.map((item) => (
                    <Card flexRow={true} key={item.id} data={item} />
                  ))}
              </div>
            ) : (
              <div className="text-4xl flex mt-10 text-center font-bold text-primary_color">
                No Resturent Of this {state.title} Name {state?.countryName}{" "}
              </div>
            )}
          </div>
          {}
        </div>
        <div className="flex-1">
          <img src={Map} alt="" />
        </div>
      </div>
      <div className="container mt-4">
        <Button className="bg-primary_color  rounded-full text-white">
          Show more
        </Button>
      </div>
    </section>
  );
}

export default SearchContent;
