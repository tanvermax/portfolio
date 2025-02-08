import React from "react";
import Home from "../Home/Home";
import Navber from "../Home/Navber";
import AnimatedCursor from "react-animated-cursor";

const Mainlayout = () => {
  return (
    <div className="flex bg-black min-h-[110vh]">
      <AnimatedCursor></AnimatedCursor>
      <Home></Home>
    </div>
  );
};

export default Mainlayout;
