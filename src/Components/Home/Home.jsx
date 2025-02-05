import React from "react";
import { DiGhostSmall } from "react-icons/di";
import Navber from "./Navber";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex">
      <Navber></Navber>
      <div className="">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
