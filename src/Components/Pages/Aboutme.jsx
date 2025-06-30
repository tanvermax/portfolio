import React from "react";
import photo from "./../../assets/photo22.png";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const Aboutme = () => {
  return (
    <div className=" p-2 ">
      <h1 className="text-emerald-500 font-bold md:text-xl text-[10px]">ABOUT ME</h1>
      <p className="mt-10 md:leading-[30px] text-gray-400 border-l-2  pl-2 border-emerald-500 md:text-xl text-[6px]">
        I am a highly skilled Full-Stack Web Developer with over 6 years of experience, specializing in React.js, JavaScript, and UI/UX design. With a strong passion for creating dynamic and user-centric web applications, I have successfully completed 550+ projects worldwide, delivering high-performance solutions tailored to clients’ needs. My expertise extends to front-end and back-end development, ensuring seamless functionality and outstanding user experiences.
      </p>
      <p className="mt-5 md:leading-[30px] md:text-xl text-[6px] text-gray-400 border-l-2  pl-2 border-emerald-500">
        I thrive in designing and developing intuitive interfaces, optimizing website performance, and implementing innovative solutions that enhance usability. My commitment to clean, maintainable code and modern development practices sets me apart in the industry.
      </p>
      <p className="mt-5  md:leading-[30px] md:text-xl text-[6px] text-gray-400 border-l-2  pl-2 border-emerald-500">
        Beyond programming, I enjoy exploring new technologies, mentoring aspiring developers, and engaging in continuous learning. Outside of tech, I have a deep passion for photography, adventure travel, and playing chess, which help me stay creative and think strategically.
      </p>
      <p className="mt-5 md:leading-[30px] md:text-xl text-[6px] text-gray-400 border-l-2  pl-2 border-emerald-500">
        Driven by curiosity and a problem-solving mindset, I embrace challenges and continuously strive to push the boundaries of digital experiences. Whether working on complex web applications or collaborating with teams, my goal is to craft impactful, scalable, and efficient solutions.
      </p>
      <div className="py-10 text-white flex items-center justify-center">
        <div className="w-full grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src={photo}
              alt="Profile"
              className="md:h-[400px] w-[100px] md:w-fit shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-transparent"
            />
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="md:text-2xl text-[10px] font-bold">UI/UX Designer & Web Developer</h2>
            <div className="lg:grid md:grid-cols-2 gap-4 mt-4 text-gray-300 mb-20">
              <p className="flex items-center gap-3 text-[6px] md:text-xl">
                <IoIosArrowForward className="text-emerald-500" />
                <span className="font-semibold"> Birthday:</span> 29 March 2000
              </p>
              <p className="flex items-center gap-3 text-[6px] md:text-xl">
                <IoIosArrowForward className="text-emerald-500" />
                <span className="font-semibold"> Age:</span> 25
              </p>
              <p className="flex items-center gap-3 text-[6px] md:text-xl">
                <IoIosArrowForward className="text-emerald-500" />
                <span className="font-semibold"> Phone:</span> +8801701866120
              </p>
              <p className="flex items-center gap-3 text-[6px] md:text-xl">
                <IoIosArrowForward className="text-emerald-500" />
                <span className="font-semibold"> City:</span> DHAKA, Bangladesh
              </p>
              <p className="flex items-center gap-3 text-[6px] md:text-xl ">
                <IoIosArrowForward className="text-emerald-500" />
                <span className="font-semibold"> Degree:</span> Bachelor of Science
              </p>
              <p className="flex items-center gap-3 text-[6px] md:text-xl">
                <IoIosArrowForward className="text-emerald-500" />
                <span className="font-semibold"> Mail:</span> tanveermahidi@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
