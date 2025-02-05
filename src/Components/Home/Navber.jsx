import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { RiHome4Line } from "react-icons/ri";
import { SiAwesomelists } from "react-icons/si";
import { PiGitlabLogoSimpleBold, PiSuitcaseSimpleThin } from "react-icons/pi";
import { CiPen } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { TbBrandGoogleHome } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navber = () => {
  const [isOpen, setIsopen] = useState(false);

  const togglemenu = () => {
    setIsopen(!isOpen);
  };
  const navoption = (
    <>
      <div className="bg-black p-5 flex  items-center">
        <img src="/src/assets/logo2.png" alt="" />
        <p>TANVER MAHIDI</p>
      </div>
      <ul className="menu   shadow-md rounded-lg p-4 space-y-10 ">
        <Link className="p-4 flex items-center border-[1px] bg-emerald-500 rounded-md border-gray-700">
          <TbBrandGoogleHome className="text-2xl  text-white" />
          <li className="  w-40   group relative overflow-hidden">
            <button className="relative flex flex-col items-center p-4  text-2xl text-black rounded-xl transition-all duration-300">
              {/* Default "HOME" (Visible by default, hides on hover) */}
              <span className="absolute top-0 transition-all duration-600 group-hover:-translate-y-5 group-hover:opacity-0">
                HOME
              </span>

              {/* Hover "HOME" (Hidden by default, slides up on hover) */}
              <span className="absolute top-0 opacity-0 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:opacity-100">
                HOME
              </span>

              {/* Icon */}
            </button>
          </li>
        </Link>

        <Link to={"aboutme"} className="p-4 flex items-center border-[1px] bg-emerald-500 rounded-md border-gray-700">
          <SiAwesomelists className="text-2xl  text-black" />
          <li className="  w-40   group relative overflow-hidden">
            <button className="relative flex flex-col items-center p-4  text-2xl text-black rounded-xl transition-all duration-300">
              {/* Default "HOME" (Visible by default, hides on hover) */}
              <span className="absolute top-0 transition-all duration-600 group-hover:-translate-y-5 group-hover:opacity-0">
                ABOUT ME
              </span>

              {/* Hover "HOME" (Hidden by default, slides up on hover) */}
              <span className="absolute top-0 opacity-0 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:opacity-100">
                ABOUT ME
              </span>

              {/* Icon */}
            </button>
          </li>
        </Link>
        <Link to={"service"} className="p-4 flex items-center border-[1px] bg-emerald-500 rounded-md border-gray-700">
          <PiSuitcaseSimpleThin className="text-2xl  text-black" />
          <li className="  w-40   group relative overflow-hidden">
            <button className="relative flex flex-col items-center p-4  text-2xl text-black rounded-xl transition-all duration-300">
              {/* Default "HOME" (Visible by default, hides on hover) */}
              <span className="absolute top-0 transition-all duration-600 group-hover:-translate-y-5 group-hover:opacity-0">
                SERVICE
              </span>

              {/* Hover "HOME" (Hidden by default, slides up on hover) */}
              <span className="absolute top-0 opacity-0 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:opacity-100">
                SERVICE
              </span>

              {/* Icon */}
            </button>
          </li>
        </Link>
        <Link to={"skill"} className="p-4 flex items-center border-[1px] bg-emerald-500 rounded-md border-gray-700">
          <CiPen className="text-2xl  text-black" />
          <li className="  w-40   group relative overflow-hidden">
            <button className="relative flex flex-col items-center p-4  text-2xl text-black rounded-xl transition-all duration-300">
              {/* Default "HOME" (Visible by default, hides on hover) */}
              <span className="absolute top-0 transition-all duration-600 group-hover:-translate-y-5 group-hover:opacity-0">
                SKILL
              </span>

              {/* Hover "HOME" (Hidden by default, slides up on hover) */}
              <span className="absolute top-0 opacity-0 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:opacity-100">
                SKILL
              </span>

              {/* Icon */}
            </button>
          </li>
        </Link>
        <Link to={"portfolio"} className="p-4 flex items-center border-[1px] bg-emerald-500 rounded-md border-gray-700">
          <TiMessages className="text-2xl  text-black" />
          <li className="  w-40   group relative overflow-hidden">
            <button className="relative flex flex-col items-center p-4  text-2xl text-black rounded-xl transition-all duration-300">
              {/* Default "HOME" (Visible by default, hides on hover) */}
              <span className="absolute top-0 transition-all duration-600 group-hover:-translate-y-5 group-hover:opacity-0">
                PORFOLIO
              </span>

              {/* Hover "HOME" (Hidden by default, slides up on hover) */}
              <span className="absolute top-0 opacity-0 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:opacity-100">
                PORFOLIO
              </span>

              {/* Icon */}
            </button>
          </li>
        </Link>
        <Link to={"blog"} className="p-4 flex items-center border-[1px] bg-emerald-500 rounded-md border-gray-700">
          <PiGitlabLogoSimpleBold className="text-2xl  text-black" />
          <li className="  w-40   group relative overflow-hidden">
            <button className="relative flex flex-col items-center p-4  text-2xl text-black rounded-xl transition-all duration-300">
              {/* Default "HOME" (Visible by default, hides on hover) */}
              <span className="absolute top-0 transition-all duration-600 group-hover:-translate-y-5 group-hover:opacity-0">
                BLOG
              </span>

              {/* Hover "HOME" (Hidden by default, slides up on hover) */}
              <span className="absolute top-0 opacity-0 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:opacity-100">
                BLOG
              </span>

              {/* Icon */}
            </button>
          </li>
        </Link>
        <Link to={"contact"} className=" p-4 flex items-center border-[1px] bg-emerald-500 rounded-md border-gray-700">
          <FaRegUserCircle className="text-2xl  text-black" />
          <li className="  w-40   group relative overflow-hidden">
            <button className="relative flex flex-col items-center p-4  text-2xl text-black rounded-xl transition-all duration-300">
              {/* Default "HOME" (Visible by default, hides on hover) */}
              <span className="absolute top-0 transition-all duration-600 group-hover:-translate-y-5 group-hover:opacity-0">
                CONTACT
              </span>

              {/* Hover "HOME" (Hidden by default, slides up on hover) */}
              <span className="absolute top-0 opacity-0 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:opacity-100">
                CONTACT
              </span>

              {/* Icon */}
            </button>
          </li>
        </Link>
      </ul>
    </>
  );
  return (
    <div className="bg-black  h-screen">
      <div className="navbar ">
        <div className="">
          <div
            onClick={togglemenu}
            tabIndex={0}
            role="button"
            className=" p-3 bg-emerald-300 lg:hidden"
          >
            <VscThreeBars className="text-black text-2xl" />
          </div>
        </div>

        <div className="navbar-center hidden lg:block  ">{navoption}</div>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed top-0 left-0 h-full w-72 bg-gray-900  shadow-lg  z-50"
          >
            <button
              className="absolute top-3 bg-gray-900 p-3 -right-16 text-2xl"
              onClick={togglemenu}
            >
              <RxCross1 />
            </button>
            {navoption}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navber;
