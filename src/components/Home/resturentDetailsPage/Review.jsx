import React, { useState } from "react";
import FilterButton from "./FilterButton";
import user from "../../../assets/icons/user.png";
import Star from "../../../Golbal/Star";
import Button from "../../../Golbal/Button";
import Filter from "../../../assets/icons/filter.png";
import Sortt from "../../../assets/icons/sort.png";
import Sort from "./Sort";

function Review({ allReview }) {
  const [isFilter, setIsfilter] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [sortQuery, setSortQuery] = useState(false);
  const [filterQuery, setFilterQuery] = useState(0);

  const filteredData = filterQuery
    ? allReview.filter((item) => {
        const rate = Math.floor(item.rat);
        if (filterQuery === rate) {
          return item;
        }
      })
    : allReview.sort((a, b) => {
        if (sortQuery) {
          return a.rat - b.rat;
        } else {
          return b.rat - a.rat;
        }
      });

  const handleSearch = (value) => {
    setFilterQuery(value);
    setIsfilter(false);
  };
  const handleSort = (value) => {
    setSortQuery(value);
    setIsSort(!isSort);
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="space-x-8 px-2 flex">
          <span
            onClick={() => setIsfilter(!isFilter)}
            className={`px-2 cursor-pointer ${isFilter && !isSort ? " bg-gray-800" : "bg-gray-500" }  flex gap-2 w-[100px] text-white py-2 border border-gray-700 rounded-full relative`}
          >
            <img className="w-[20px] h-[20px]" src={Filter} alt="" />
            Filter
            {isFilter && <FilterButton onSearch={handleSearch} />}
          </span>
          <span
            onClick={() => setIsSort(!isSort)}
            className={`px-2 cursor-pointer ${isSort && !isFilter ? " bg-gray-800 text-white" : "bg-gray-200 text-black" }  flex gap-2 w-[100px] py-2 border border-gray-700 rounded-full relative`}
          >
            <img className="w-[20px] h-[20px]" src={Sortt} alt="" />
            Sort
            {isSort && <Sort onSort={handleSort} />}
          </span>
        </div>
        {/* review  */}
        <div className="mt-5 flex flex-col gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, ind) => (
              <div
                key={ind}
                className="bg-[#F8F8F8] flex gap-5 px-2 sm:px-5 lg:px-8 rounded-lg py-4"
              >
                <div className="mt-4">
                  <img className="w-[20px]" src={user} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] md:text-[21px] font-bold font-Lexend">
                    {item.userName}
                  </h1>
                  <p className="text-[14px] md:text-[16px] text-secondary_color2">
                    {item.userLocation}
                  </p>
                  <div className="flex gap-2 my-3">
                    <div className="flex gap-1">
                      <Star starCount={item.rat} />
                    </div>
                    <p className="text-xs">{item.date}</p>
                  </div>
                  <p className="max-w-[500px] mt-4 lg:mt-8 text-sm text-secondary_color2">
                    {item.description} Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Optio aperiam
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1>No review vailable</h1>
          )}
        </div>
        <div>
          <Button className="bg-primary_color rounded-full text-white m-auto">
            Show more reviews
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Review;
