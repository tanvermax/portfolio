import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiBootstrap } from "react-icons/si";

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
    <div className="min-h-screen w-screen bg-black text-white p-10">
      <h2 className="text-xl md:text-3xl font-bold text-center text-green-400 mb-10">MY Skills</h2>

      <div className="md:max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:ml-0 ml-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-4 rounded-lg text-center shadow-md flex flex-col items-center justify-center"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-6xl mb-2">{skill.icon}</div>
              <p className="text-[8px] md:text-xl font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download CV Section */}
      <div className="max-w-6xl mx-auto mt-10 text-center">
        <h3 className="md:text-2xl text-lg font-semibold text-green-400">Download CV</h3>
        <motion.a
          href="/your-cv.pdf"
          download
          className="bg-green-500 text-black font-bold px-6 py-3 rounded-md inline-block mt-4 hover:bg-green-400 transition"
          whileHover={{ scale: 1.1 }}
        >
          Download CV
        </motion.a>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto mt-10">
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
              <h4 className="md:text-xl text-lg font-bold">{edu.title}</h4>
              <p className="text-gray-400 md:text-lg text-base">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
