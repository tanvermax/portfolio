import { useState } from 'react';
import { motion } from 'framer-motion';

const DynamicPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    techStack: '',
    description: '',
    liveLink: '',
    github: '',
    challenges: '',
    improvements: ''
  });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, formData]);
    setFormData({
      name: '',
      image: '',
      techStack: '',
      description: '',
      liveLink: '',
      github: '',
      challenges: '',
      improvements: ''
    });
    setIsFormOpen(false);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          My Dynamic Portfolio
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleForm}
          className="mb-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-300"
        >
          {isFormOpen ? 'Cancel' : 'Add New Project'}
        </motion.button>

        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-12 bg-gray-800 p-6 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Add Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Project Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Tech Stack</label>
                <input
                  type="text"
                  name="techStack"
                  value={formData.techStack}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1">Live Link</label>
                  <input
                    type="url"
                    name="liveLink"
                    value={formData.liveLink}
                    onChange={handleChange}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1">GitHub Link</label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Challenges</label>
                <textarea
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleChange}
                  rows="2"
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Future Improvements</label>
                <textarea
                  name="improvements"
                  value={formData.improvements}
                  onChange={handleChange}
                  rows="2"
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
              >
                Add Project
              </motion.button>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.techStack}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-gray-400 font-semibold mb-1">Challenges:</h4>
                  <p className="text-gray-300 text-sm">{project.challenges}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-gray-400 font-semibold mb-1">Future Improvements:</h4>
                  <p className="text-gray-300 text-sm">{project.improvements}</p>
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && !isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects added yet. Click "Add New Project" to get started!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DynamicPortfolio;