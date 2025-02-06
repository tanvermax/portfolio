import React from "react";
import photo from "./../../assets/photo22.png"

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
          applications with a focus on user experience and seamless
          functionality.
        </p>

      <div className="py-5">
        <img className="h-[400px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-transparent" src={photo} alt="" />
      </div>
    </div>
  );
};

export default Aboutme;
