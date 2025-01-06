import React from "react";

function Sort({ onSort }) {
  return (
    <div className="bg-white absolute  w-[200px] p-3 left-0 top-[50px] shadow-[1px_10px_10px_rgba(0,0,0,0.4)] rounded-xl text-black">
      <div className="flex flex-col gap-2 font-semibold text-secondary_color2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSort(false);
          }}
          className="flex items-center justify-center gap-4"
        >
          All feedbacks
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSort(false);
          }}
          className="flex items-center justify-center gap-4"
        >
          Highest rated
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSort(true);
          }}
          className="flex items-center justify-center gap-4"
        >
          oldest rated
        </button>
      </div>
    </div>
  );
}

export default Sort;
