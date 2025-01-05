import React from "react";
import { useLocation } from "react-router";
import { getDataByNameAndCountry } from "../data/data";

function SearchContent() {
  const { state } = useLocation();
  const resturentData = getDataByNameAndCountry(state);
  console.log(resturentData);
  return <div>SearchContent</div>;
}

export default SearchContent;
