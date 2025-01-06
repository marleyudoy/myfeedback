import star from "../../../assets/icons/star.png";


function FilterButton({ onSearch }) {
  return (
    <div className="bg-white absolute  w-[200px] p-3 left-0 top-[50px] shadow-[1px_10px_10px_rgba(0,0,0,0.4)] rounded-xl text-black">
      <h1 className="font-bold pb-2">filter by rating</h1>
      <div className="flex flex-col">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSearch(0);
          }}
          className="flex items-center justify-center gap-4"
        >
          <span className="font-bold text-yellow-600 text-xl self-start">
            All
          </span>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSearch(5);
          }}
          className="flex items-center justify-center gap-4"
        >
          <span className="font-bold text-yellow-600 text-xl">5</span>
          <div className="flex gap-1">
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
          </div>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSearch(4);
          }}
          className="flex items-center justify-center gap-4"
        >
          <span className="font-bold text-yellow-600 text-xl">4</span>
          <div className="flex gap-1">
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
          </div>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSearch(3);
          }}
          className="flex items-center justify-center gap-4"
        >
          <span className="font-bold text-yellow-600 text-xl">3</span>
          <div className="flex gap-1">
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
          </div>
        </button>

        <button
               onClick={(e)=>{
                e.stopPropagation()
                onSearch(2)
              }}
          className="flex items-center justify-center gap-4"
        >
          <span className="font-bold text-yellow-600 text-xl">2</span>
          <div className="flex gap-1">
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
            <img className="w-[18px]" src={star} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default FilterButton;
