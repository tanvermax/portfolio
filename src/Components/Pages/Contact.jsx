import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pr-32 pl-20  min-h-screen w-screen bg-black text-white  mx-auto p-10 md:p-36">
    {/* Contact Info Section */}
    <div className="grid  md:grid-cols-3 gap-6 mb-12 max-w-4xl">
      {/* Phone */}
      <div className="bg-gray-900 p-6 rounded-md text-center w-[200px] md:w-[200px]">
        <div className="text-green-400 md:text-4xl  flex justify-center gap-5">📞 <FaWhatsapp />
        </div>
        <h2 className="md:text-xl text-[8px] font-bold mt-2">Phone</h2>
        <p className="text-gray-300 font-semibold mt-1">+8801701866120</p>
      </div>

      {/* Location */}
      <div className="bg-gray-900 p-6 rounded-md text-center w-[200px] md:w-[200px]">
        <div className="text-green-400 md:text-4xl ">Location</div>
        <h2 className="md:text-xl text-[8px] font-bold mt-2"></h2>
        <p className="text-gray-400 mt-1">Dhaka 1256, Bangladesh</p>
        <a href="#" className="text-green-400 font-semibold mt-1">View on map</a>
      </div>

      {/* Email */}
      <div className="bg-gray-900 p-6 rounded-md text-center w-[200px] md:w-[200px]">
        <div className="text-green-400 md:text-4xl ">Email</div>
        <p className="text-gray-300 font-semibold mt-1 text-[12px]">tanveermahidi@gmail.com</p>
      </div>
    </div>

    {/* Contact Form */}
    <div className="md:max-w-4xl md:w-full">
      <form className=" p-6 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name Here" className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white md:w-full w-[150px]" />
          <input type="text" placeholder="Subject" className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white md:w-full w-[150px]" />
        </div>
        <input type="email" placeholder="Email" className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white md:w-full w-[150px] mt-4" />
        <textarea placeholder="Your Message Here" className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white md:w-full w-[150px] mt-4 h-32"></textarea>
        <button type="submit" className="mt-4 w-full bg-emerald-500 py-3 rounded-md text-black font-bold hover:bg-emerald-600 transition">
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
