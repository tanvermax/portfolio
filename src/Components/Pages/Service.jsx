import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="bg-black pl-24 md:p-28 text-black p-5 pr-7 h-screen md:pr-7 py-20 md:pl-0 pb-20">
      {/* Header */}
      <motion.h1 
        className="md:text-4xl text-[10px] font-bold text-white text-center mb-8"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        My Biodata
      </motion.h1>

      {/* Summary Section */}
      <motion.div 
        className="bg-gray-800 p-6 shadow-lg rounded-lg border-l-4  border-emerald-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="md:text-2xl text-[6px] font-semibold text-emerald-500 mb-2">Summary</h2>
        <p className="text-white italic md:text-2xl text-[6px]">
          <span className="font-bold ">Tanver Mahidi</span> - Passionate Full Stack Web Developer with **6+ years** of experience. Specialized in **React.js, Tailwind CSS, Node.js, and MongoDB**. Completed **550+ international projects** on Fiverr with excellence.
        </p>
       
      </motion.div>

      {/* Education Section */}
      <motion.div 
        className="mt-6 bg-gray-800 p-6 shadow-lg rounded-lg border-l-4 border-blue-500"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="md:text-2xl text-[6px] font-semibold text-blue-500 mb-2">Education</h2>
        <p className="text-white md:text-2xl text-[6px]">
          <span className="font-bold">B.Sc. in Computer Science & Engineering</span><br />
          Ideal College, Dhanmondi | **Final Year**
        </p>
      </motion.div>

      {/* Experience Section */}
      <motion.div 
        className="mt-6 bg-gray-800 p-6 shadow-lg rounded-lg border-l-4 border-green-500"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="md:text-2xl text-[6px] font-semibold text-green-500 mb-2">Work Experience</h2>
        
        <div className="pl-4">
          <h3 className="font-bold text-white md:text-2xl text-[6px]">Full Stack Developer | Fiverr</h3>
          <p className="text-gray-400 italic md:text-2xl text-[6px]">2018 - Present</p>
          <ul className="mt-2 text-white list-disc pl-5 md:text-2xl text-[6px]">
            <li>Developed and delivered **550+ websites** worldwide.</li>
            <li>Specialized in **React.js, Node.js, MongoDB, and Tailwind CSS**.</li>
            <li>Handled **front-end & back-end** for eCommerce, business, and service platforms.</li>
          </ul>
        </div>

        <div className="pl-4 mt-4">
          <h3 className="font-bold text-white md:text-2xl text-[6px]">Machine Learning Researcher</h3>
          <p className="text-gray-400 italic md:text-2xl text-[6px]">AI & ML Research Group</p>
          <ul className="mt-2 text-white list-disc pl-5 md:text-2xl text-[6px]">
            <li>Focusing on **Explainable AI (XAI) and AI for Social Good**.</li>
            <li>Currently working on AI-powered **eCommerce solutions**.</li>
            <li>Contributing to open-source AI projects and research papers.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
