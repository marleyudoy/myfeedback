import React from "react";
import { useLocation } from "react-router";

function ResturentDetails() {
  const {state} = useLocation();
  console.log(state);
  return <div>ResturentDetails</div>;
}

export default ResturentDetails;
