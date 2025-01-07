import { useState } from "react";
import { navbarItems } from "../../constants";

function Category() {
  const [borderIndxes, setBorderIndex] = useState(1);
  return (
    <section className="py-5">
      {/* category  */}
      <div className="container">
        <ul className=" overflow-hidden grid grid-cols-6 lg:grid-cols-12 gap-4">
          {navbarItems.map((item, index) => (
            <li
            onClick={()=>setBorderIndex(index)}
              key={index}
              className={`text-secondary_color2 flex flex-col cursor-pointer ${
                borderIndxes === index && "border-b border-primary_color"
              } items-center gap-2 text-center justify-center text-[12px] md:text-[15px]`}
            >
              <img
                src={item.iamge}
                className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
                alt=""
              />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Category;
