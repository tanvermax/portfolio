import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaComment, FaCalendarAlt } from "react-icons/fa";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      title: "Mastering React Hooks in 2023",
      description: "Learn how to leverage React Hooks to build cleaner, more efficient components and how they compare to class components.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "15 JULY",
      author: "Tanveer Mahdi",
      comments: 8,
    },
    {
      id: 2,
      title: "The Future of JavaScript: ES2023 Features",
      description: "Explore the latest ECMAScript features that will change how you write JavaScript code and improve your development workflow.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "22 JULY",
      author: "Tanveer Mahdi",
      comments: 12,
    },
    {
      id: 3,
      title: "Building Scalable Node.js Microservices",
      description: "A practical guide to architecting and deploying microservices with Node.js, Docker, and Kubernetes in production environments.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      date: "5 AUGUST",
      author: "Tanveer Mahdi",
      comments: 15,
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative top-20 left-10 md:px-16 pr-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-emerald-400 text-sm font-semibold tracking-wider">
          TECH BLOG
        </span>
        <motion.h2 
          className="text-[10px] md:text-4xl font-bold mt-3 mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Insights & Tutorials <br /> For Modern Developers
        </motion.h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
      </motion.div>

      {/* Blog Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {blogData.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-gray-800 w-54 md:w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <div className="relative ">
              <img
                src={blog.image}
                alt={blog.title}
                className=" object-cover   "
              />
              <motion.span 
                className="absolute top-4 right-4 bg-emerald-500 text-gray-900 px-3 py-1 text-xs font-bold rounded-md"
                whileHover={{ scale: 1.05 }}
              >
                <FaCalendarAlt className="inline mr-1" />
                {blog.date}
              </motion.span>
            </div>
            <div className="md:p-6 p-3">
              <div className="flex items-center text-gray-400 text-xs mb-3">
                <span className="flex items-center mr-4 md:text-base text-[8px]">
                  <FaUser className="md:text-base text-[10px] text- mr-1 text-emerald-400" />
                  {blog.author}
                </span>
                <span className="flex items-center md:text-base text-[8px]">
                  <FaComment className="mr-1 text-emerald-400" />
                  {blog.comments} Comments
                </span>
              </div>
              <h3 className="md:text-lg text-xs font-bold mb-2 hover:text-emerald-400 transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 md:text-base text-[8px]">{blog.description}</p>
              <motion.button
                className="text-emerald-400 md:text-sm text-[10px] font-medium hover:text-emerald-300 flex items-center"
                whileHover={{ x: 5 }}
              >
                Read More →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;