import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "FIXITNEST",
    image: "https://i.ibb.co.com/5hmzVgWV/Screenshot-2025-02-07-21-27-42.png",
    techStack: "React, Tailwind, Node.js, MongoDB",
    description: "An eCommerce platform for tech gadgets with dynamic product filtering and a wishlist feature.",
    liveLink: "https://gadgets-heaven.netlify.app/",
    github: "https://github.com/tanvermax/home-service",
    challenges: "Optimizing performance for large datasets and ensuring seamless state management.",
    improvements: "Enhancing search functionality, integrating AI-driven product recommendations."
  },
  {
    name: "MOVIEFLEX",
    image: "https://i.ibb.co.com/r2Qk7nGp/Screenshot-2025-02-07-21-32-20.png",
    techStack: "MERN Stack, Redux, Firebase Auth",
    description: "A micro-tasking platform where users can complete small tasks and earn money.",
    liveLink: "https://movies-24249.web.app/",
    github: "https://github.com/tanvermax/movie-flex",
    challenges: "Implementing real-time task updates and managing role-based authentication.",
    improvements: "Adding payment gateway integration and improving task recommendation algorithms."
  },
  {
    name: "ECO ADVENTURE",
    image: "https://i.ibb.co.com/Z1pQzCbh/Screenshot-2025-02-07-21-30-52.png",
    techStack: "React, Tailwind, Express, MongoDB",
    description: "An eCommerce platform focused on pet products and accessories.",
    liveLink: "https://assignment-9-bb0d9.web.app/",
    github: "https://github.com/tanvermax/eco-adventure",
    challenges: "Creating an intuitive UI for pet categories and optimizing API performance.",
    improvements: "Adding a pet adoption section and integrating user-generated reviews."
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300">
            <motion.img
              src={project.image}
              alt={project.name}
              className="rounded-lg w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <button 
                onClick={() => setSelectedProject(project)} 
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6">
          <div className="bg-black p-6 rounded-2xl shadow-lg w-full max-w-lg">
            <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
            <p className="mt-2"><strong>Tech Stack:</strong> {selectedProject.techStack}</p>
            <p className="mt-2">{selectedProject.description}</p>
            <p className="mt-2"><strong>Challenges:</strong> {selectedProject.challenges}</p>
            <p className="mt-2"><strong>Future Improvements:</strong> {selectedProject.improvements}</p>
            <div className="flex gap-4 mt-4">
              <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">Live Project</a>
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub Repo</a>
            </div>
            <button 
              onClick={() => setSelectedProject(null)} 
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
