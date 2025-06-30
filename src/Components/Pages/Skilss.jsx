import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { GoDownload } from "react-icons/go";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  return ( 
    <div className="relative md:top-20 top-10 -left-5 pb-5 px-16 bg-black">
      <h2 className="text-xl md:text-3xl font-bold text-center text-green-400 mb-10">MY Skills</h2>

      <div className="md:max-w-6xl w-[200px] md:w-full mx-auto bg-black">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:ml-0 ml-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-4 rounded-lg text-center shadow-md flex flex-col items-center justify-center"
              whileHover={{ scale: 1.4 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.0 }}
            >
              <div className="text-3xl md:text-6xl mb-2">{skill.icon}</div>
              <p className="text-[8px] md:text-xl font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download CV Section */}
      <div className="max-w-6xl mx-auto mt-10 text-center ">
        <h3 className="md:text-2xl text-lg font-semibold text-green-400">Download CV</h3>
        <motion.a
          download
          className=" px-6 py-3 rounded-md inline-block mt-4 "
          whileHover={{ scale: 1.1 }}
        >
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
        </motion.a>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto mt-10 bg-black ml-5">
        <h3 className="md:text-2xl text-lg font-semibold text-green-400 text-center">Education</h3>
        <div className="mt-4 space-y-4">
          {[ 
            { title: "BSc in Computer Science & Engineering", school: "Ideal College, Dhanmondi | 4th Year" },
            { title: "Higher Secondary Certificate (HSC)", school: "Ideal College, Dhanmondi" },
            { title: "Secondary School Certificate (SSC)", school: "AL Amin Institute, Cumilla" }
          ].map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h4 className="md:text-xl text-xs font-bold">{edu.title}</h4>
              <p className="text-gray-400 md:text-lg text-xs">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
