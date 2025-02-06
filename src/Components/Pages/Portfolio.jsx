import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Gadgets Heaven",
    image: "/assets/gadgets-heaven.png",
    link: "https://gadgets-heaven.netlify.app",
  },
  {
    id: 2,
    title: "Pets Shop",
    image: "/assets/pets-shop.png",
    link: "https://pets-shop.netlify.app",
  },
  {
    id: 3,
    title: "Bike Website",
    image: "/assets/bike-website.png",
    link: "https://bike-website.netlify.app",
  },
  {
    id: 4,
    title: "News Portal",
    image: "/assets/news-portal.png",
    link: "https://news-portal.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen  text-white p-10">
      <h2 className="text-4xl font-bold text-center text-emerald-500 mb-10">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-center mt-3">
                {project.title}
              </h3>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
