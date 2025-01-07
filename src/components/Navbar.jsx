import { Link, useNavigate } from "react-router";
import Logo from "../assets/logo.png";
import bowser from "../assets/icons/internet.png";
import Button from "../Golbal/Button";
import Search from "../assets/icons/search.png";
import { useState } from "react";

function Navbar() {
  const [searchName, setSearchName] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchName(value);
  };
  const handleSelect = (e) => {
    const value = e.target.value.toLowerCase();
    setSelectCountry(value);
  };

  const handleSubmit = () => {
    navigate("/search", {
      state: { countryName: selectCountry, title: searchName },
    });
    setSelectCountry("");
    setSearchName("");
  };

  return (
    <header className="border-b pb-2">
      <nav className="container h-[70px] flex gap-5 justify-between items-center">
        <div className="bg-primary_color px-2 py-1 rounded-xl">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="border border-secondary_color2 px-1 py-1 md:px-4 md:py-2 rounded-full lg:w-[40%] flex items-center justify-around md:justify-between">
          <input
            value={searchName}
            onChange={handleSearch}
            className="outline-none px-2 w-[100px] sm:w-auto"
            type="search"
            name="title"
            placeholder="search returent name.."
            id="search"
          />
          <select
            className="outline-none text-secondary_color2 w-[100px] md:w-auto"
            name="countryName"
            id="country"
            onChange={handleSelect}
          >
            <option value="singapour">Singapour</option>
            <option value="dubai">Dubai</option>
          </select>
          <button
            onClick={handleSubmit}
            className="bg-primary_color w-[30px] h-[30px] flex items-center justify-center rounded-full"
          >
            <img src={Search} alt="" />
          </button>
        </div>
        <div className=" hidden lg:flex items-center justify-center gap-4">
          <img src={bowser} alt="" />
          <Button className="bg-black text-white rounded-full">
            MyFeedback for business
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
