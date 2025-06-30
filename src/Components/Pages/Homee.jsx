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
import phot from "./../../assets/banner3.png";
import { PiYoutubeLogoThin } from "react-icons/pi";

const Homee = () => {
  const words = ["WEB DEVELOPER", "ENGINEER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" lg:grid md:grid-cols-2 relative top-20  left-10 px-16 flex flex-col-reverse ">
      <div>
        <div className="md:pt-20 md:ml-10">
          <h1 className="md:text-5xl md:w-[550px] w-[200px] md:leading-[60px] font-bold">
            HI, I'M TANVER! CREATIVE{" "} <br />
            <motion.span
              key={words[index]} // Key changes to trigger animation
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 2, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-emerald-500 inline-block  "
            >
              {words[index]}
            </motion.span>
          </h1>
          <p className="md:w-[550px] w-[200px]pr-[50px] md:text-xl text-[8px] pt-10 md:pr-0 pr-5 md:leading-[30px] text-gray-400">
            I'm a passionate Full-Stack Web Developer with over 3 years of
            experience specializing in React.js, JavaScript, and UI/UX design. I
            have completed 250+ projects worldwide, crafting dynamic and
            engaging digital experiences. My expertise lies in building
            high-performance applications with a focus on user experience and
            seamless functionality.
          </p>
        </div>
        <div className="md:mt-28 mt-5 ml-10">
          <a
            href="https://drive.google.com/file/d/1gOOoFKcR3ZCWkRtBMwL_HQqHlbK4-BT3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="shadow-[0_10px_30px_rgba(8,112,184,0.4)] hover:shadow-[0_15px_40px_rgba(8,112,184,0.6)] md:w-64 w-40 py-4 md:py-8 px-6 flex items-center justify-center border border-gray-300 bg-emerald-600 hover:bg-emerald-700 rounded-lg relative transition-all duration-300 ease-in-out  overflow-hidden group">
              {/* Default Text */}
              <span className="absolute flex items-center gap-2 md:text-lg text-sm font-medium text-white transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-0">
                <GoDownload className="md:w-5 md:h-5 w-4 h-4" /> Download CV
              </span>

              {/* Hover Text (Slides Up) */}
              <span className="absolute flex items-center gap-2 md:text-lg text-sm font-medium text-white opacity-0 transition-all duration-300 transform translate-y-5 group-hover:translate-y-0 group-hover:opacity-100">
                <GoDownload className="md:w-5 md:h-5 w-4 h-4" /> Get My Resume
              </span>
            </button>
          </a>
          <div className=" md:flex grid grid-cols-2 pr-10 md:pr-0 bg-black  md:pt-14 md:gap-5 gap-2 pt-5 pb-20">
            <Link
              to={"https://www.facebook.com/tanvermahidi999/"}
              className="border-2 mx-auto p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            >
              <RiFacebookCircleLine className="md:text-5xl text-[16px] " />
            </Link>
            <Link
              to={"https://www.instagram.com/tanverstagram/?hl=en"}
              className="border-2 mx-auto p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            >
              <CiInstagram className="md:text-5xl text-[16px]" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/tanver-mahidi-2725292ab/"}
              className="border-2 mx-auto p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            >
              <CiLinkedin className="md:text-5xl text-[16px]" />
            </Link>
            <Link
              to={"https://x.com/MahidiTanv41555"}
              className="border-2 mx-auto p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            >
              <FaXTwitter className="md:text-5xl text-[16px]" />
            </Link>
            <Link
              to={"https://github.com/tanvermax"}
              className="border-2 mx-auto p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            >
              <VscGithub className="md:text-5xl text-[16px]" />
            </Link>
            <Link
              to={"https://www.youtube.com/@TanveerMahidi"}
              className="border-2 mx-auto p-3 rounded-3xl border-emerald-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            >
              <PiYoutubeLogoThin className="md:text-5xl text-[16px]" />
            </Link>
          </div>
          {/* button */}
        </div>
      </div>
      <div className="">
        <img className="md:h-[500px]  -ml-10" src={phot} alt="" />
      </div>
    </div>
  );
};

export default Homee;
