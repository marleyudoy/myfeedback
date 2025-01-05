import { footerItems } from "../constants";

function Footer() {
  return (
    <footer className="py-5">
      <div className="container ">
        <ul className="flex flex-col items-center text-center space-y-4 md:space-y-0 md:items-start md:flex-row justify-around">
          {footerItems.length &&
            footerItems.map((items, index) => (
              <li key={index}>
                <h1 className="subheading font-bold">{items.title}</h1>
                <ul className="mt-5 space-y-3">
                  {items.items.map((it, index) => (
                    <li
                      className="text-[12px] text-secondary_color2"
                      key={index}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
        <p className="text-[14px] font-semibold text-black/70 mt-5 md:mt-10 text-center">Copyright Septembre 2023 myfeedback, designed by scott </p>
      </div>
    </footer>
  );
}

export default Footer;
