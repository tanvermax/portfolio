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

const Homee = () => {
  const words = ["DEVELOPER", "DESIGNER", "ENGINEER", "FREELANCER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner h-[100vh] w-screen bg-black p-40 text-white">
      <div className="pt-20">
        <h1 className="text-5xl w-[550px] leading-[60px] font-bold">
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
      <div className="pt-10">
        <button className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] w-64 p-10 flex items-center justify-center border border-gray-700 bg-emerald-500 rounded-md relative overflow-hidden group">
          {/* Default Text */}
          <span className="absolute flex items-center gap-2 text-2xl text-black transition-all duration-500 group-hover:-translate-y-5 group-hover:opacity-0">
            <GoDownload /> Download CV
          </span>
          {/* clolour=  7c6447 */}
          {/* Hover Text (Slides Up) */}
          <span className="absolute flex items-center gap-2 text-2xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <GoDownload /> Download CV
          </span>
        </button>
        <div className=" flex pt-14 gap-5 ">
        <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"><RiFacebookCircleLine className="text-5xl " /></Link>
        <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"><CiInstagram className="text-5xl" /></Link>
        <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"><CiLinkedin className="text-5xl"/></Link>
        <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"><FaXTwitter className="text-5xl" /></Link>
        <Link className="border-2 p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"><VscGithub className="text-5xl" /></Link>
        
        
        
        

        </div>
        {/* button */}
        
      </div>
    </div>
  );
};

export default Homee;
