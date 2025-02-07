import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./home.css";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import phot from "./../../assets/banner.png";

const Homee = () => {
  const words = ["WEB DEVELOPER", "ENGINEER", "FREELANCER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner flex  flex-col-reverse md:flex-row md:justify-between md:h-[100vh]  bg-black md:p-28 text-white">
      <div>
        <div className="pt-20 ml-10">
          <h1 className="md:text-5xl md:w-[550px] w-[200px] md:leading-[60px] font-bold">
            HI, I'M TANVER! CREATIVE{" "}
            <motion.span
              key={words[index]} // Key changes to trigger animation
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-emerald-500 inline-block"
            >
              {words[index]}
            </motion.span>
          </h1>
          {/* <p className="lg:pr-[550px] pt-10 leading-[30px] text-gray-400">
  I'm a passionate Full-Stack Web Developer with over 6 years of
  experience specializing in React.js, JavaScript, and UI/UX design. I
  have completed 550+ projects worldwide, crafting dynamic and engaging
  digital experiences. My expertise lies in building high-performance
  applications with a focus on user experience and seamless
  functionality.
</p> */}
        </div>
        <div className="mt-28">
          <button className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] md:w-64 w-24 p-5 md:p-10 flex items-center justify-center border border-gray-700 bg-emerald-500 rounded-md relative left-12 overflow-hidden group">
            {/* Default Text */}
            <span className="absolute  flex items-center gap-2 md:text-2xl text-[8px] text-black transition-all duration-500 group-hover:-translate-y-5 group-hover:opacity-0">
              <GoDownload /> Download CV
            </span>
            {/* clolour=  7c6447 */}
            {/* Hover Text (Slides Up) */}
            <span className="absolute flex items-center gap-2 md:text-2xl text-[8px] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <GoDownload /> Download CV
            </span>
          </button>
          <div className=" flex pt-14 md:gap-5 gap-2 ">
            <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <RiFacebookCircleLine className="md:text-5xl text-[8px] " />
            </Link>
            <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <CiInstagram className="md:text-5xl text-[8px]" />
            </Link>
            <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <CiLinkedin className="md:text-5xl text-[8px]" />
            </Link>
            <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <FaXTwitter className="md:text-5xl text-[8px]" />
            </Link>
            <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <VscGithub className="md:text-5xl text-[8px]" />
            </Link>
          </div>
          {/* button */}
        </div>
      </div>
      <div className="w-full">
        <img className="md:h-[600px] md:w-[1000px]" src={phot} alt="" />
      </div>
    </div>
  );
};

export default Homee;
