import React from "react";
import photo from "./../../assets/photo22.png";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const Aboutme = () => {
  return (
    <div className="min-h-screen w-screen bg-black text-white  mx-auto p-36">
      {/* Contact Info Section */}
      <h1 className="text-emerald-500 font-bold text-xl">ABOUT ME</h1>
      <p className=" pt-10 leading-[30px] text-gray-400">
        I'm a passionate Full-Stack Web Developer with over 6 years of
        experience specializing in React.js, JavaScript, and UI/UX design. I
        have completed 550+ projects worldwide, crafting dynamic and engaging
        digital experiences. My expertise lies in building high-performance
        applications with a focus on user experience and seamless functionality.
      </p>

      {/* <div className="py-5">
        <img
          className="h-[400px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-transparent"
          src={photo}
          alt=""
        />
      </div> */}
      <div>
        <div className=" py-10  text-white flex items-center justify-center ">
          <div className=" w-full grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <img
                src={photo}
                alt="Profile"
                className="h-[400px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-transparent"
              />
            </div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className=" "
            >
              <h2 className="text-2xl font-bold">
                UI/UX Designer & Web Developer
              </h2>

              <div className="grid grid-cols-2 gap-4 mt-4 text-gray-300 mb-20">
                <p className="flex items-center gap-3 text-xl">
                  <IoIosArrowForward className="text-emerald-500" />
                  <span className="font-semibold "> Birthday:</span> 29 March
                  2000
                </p>
                <p className="flex items-center gap-3 text-xl">
                  <IoIosArrowForward className="text-emerald-500" />
                  <span className="font-semibold"> Age:</span> 25
                </p>

                <p className="flex items-center gap-3 text-xl">
                  <IoIosArrowForward className="text-emerald-500" />
                  <span className="font-semibold"> Phone:</span> +8801701866120
                </p>

                <p className="flex items-center gap-3 text-xl">
                  <IoIosArrowForward className="text-emerald-500" />
                  <span className="font-semibold"> City:</span> DHAKA,
                  Bangladesh
                </p>
                <p className="flex items-center gap-3 text-xl ">
                  <IoIosArrowForward className="text-emerald-500" />
                  <span className="font-semibold "> Degree:</span> Bachelor of
                  Science
                </p>
                <p className="flex items-center gap-3 text-xl">
                  <IoIosArrowForward className="text-emerald-500" />
                  <span className="font-semibold"> Mail:</span>{" "}
                  tanveermahidi@gmail.com
                </p>
                <br />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <div className="stats shadow w-full pt-5">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
