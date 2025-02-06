import React from "react";
import { motion } from "framer-motion";


const Service = () => {
  return (
    <div className="bg-black p-6 md:p-12 text-black">
      {/* Header */}
      <motion.h1 
        className="text-4xl font-bold text-white text-center mb-8"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h1>

      {/* Summary Section */}
      <motion.div 
        className=" p-6 shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-emerald-500 mb-2">Summary</h2>
        <p className="text-white italic">
          <span className="font-bold">BRANDON JOHNSON</span> - Innovative and
          deadline-driven Graphic Designer with 3+ years of experience designing
          and developing user-centered digital/print marketing materials.
        </p>
        <ul className="mt-4 text-white">
          <li>📍 Portland par 127, Orlando, FL</li>
          <li>📞 (123) 456-7891</li>
          <li>✉️ alice.barkley@example.com</li>
        </ul>
      </motion.div>

      {/* Education Section */}
      <motion.div 
        className="mt-6  p-6 shadow-lg rounded-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-emerald-500 mb-2">Education</h2>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-bold">MASTER OF FINE ARTS & GRAPHIC DESIGN</h3>
          <p className="text-gray-500 italic">
            Rochester Institute of Technology, 2015 - 2016
          </p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4 mt-4">
          <h3 className="font-bold">BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h3>
          <p className="text-gray-500 italic">
            Rochester Institute of Technology, 2010 - 2014
          </p>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div 
        className="mt-6  p-6 shadow-lg rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-emerald-500 mb-2">
          Professional Experience
        </h2>
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold">SENIOR GRAPHIC DESIGN SPECIALIST</h3>
          <p className="text-gray-500 italic">Experion, New York, NY | 2019 - Present</p>
          <ul className="mt-2 text-white list-disc pl-5">
            <li>Lead the design, development, and implementation of graphics.</li>
            <li>Delegate tasks to a 7-member design team.</li>
            <li>Supervise quality assessment of graphic materials.</li>
          </ul>
        </div>
        <div className="border-l-4 border-green-500 pl-4 mt-4">
          <h3 className="font-bold">GRAPHIC DESIGN SPECIALIST</h3>
          <p className="text-gray-500 italic">
            Stepping Stone Advertising, 2017 - 2018
          </p>
          <ul className="mt-2 text-white list-disc pl-5">
            <li>Developed marketing materials (logos, brochures, etc.).</li>
            <li>Managed up to 5 projects simultaneously.</li>
            <li>Created 4+ design presentations per month.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
