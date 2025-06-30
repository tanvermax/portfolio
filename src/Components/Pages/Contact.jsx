import React, { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import DynamicPortfolio from "../Admin/Dynamicporfolio";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // State to toggle DynamicPortfolio visibility
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);

  const togglePortfolio = () => {
    setIsPortfolioVisible(!isPortfolioVisible);
  };

  return (
    <div className="">
      {/* Contact Info Section */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Phone */}
        <motion.div
          className="border-[1px] md:p-6 p-2 rounded-lg text-center w-full min-w-[190px] md:w-[200px] hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="text-green-400 text-3xl md:text-4xl flex justify-center gap-4">
            <span role="img" aria-label="Phone">📞</span>
            <FaWhatsapp />
          </div>
          <h2 className="text-sm md:text-xl font-bold mt-2 text-white">Phone</h2>
          <p className="text-gray-300 font-medium text-xs md:text-base mt-1">
            +880 1701 866120
          </p>
          <motion.a
            href="tel:+8801701866120"
            className="inline-block text-green-400 text-xs md:text-sm font-medium mt-2 hover:text-green-300"
            whileHover={{ scale: 1.05 }}
          >
            Call Now
          </motion.a>
        </motion.div>

        {/* Location */}
        <motion.div
          className="border-[1px] md:p-6 p-2 rounded-lg text-center w-full min-w-[190px] md:w-[200px] hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="text-green-400 text-3xl md:text-4xl">
            <FaMapMarkerAlt className="inline-block" />
          </div>
          <h2 className="text-sm md:text-xl font-bold mt-2 text-white">
            Location
          </h2>
          <p className="text-gray-300 text-xs md:text-base mt-1">
            Dhaka 1256, Bangladesh
          </p>
          <motion.a
            href="#"
            className="inline-block text-green-400 text-xs md:text-sm font-medium mt-2 hover:text-green-300"
            whileHover={{ scale: 1.05 }}
          >
            View on map
          </motion.a>
        </motion.div>

        {/* Email */}
        <motion.div
          className="border-[1px] md:p-6 p-2 rounded-lg text-center w-full min-w-[190px] md:w-[200px] hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="text-green-400 text-3xl md:text-4xl">
            <FaEnvelope className="inline-block" />
          </div>
          <h2 className="text-sm md:text-xl font-bold mt-2 text-white">
            Email
          </h2>
          <p className="text-gray-300 text-xs md:text-sm mt-1 break-words">
            tanveermahidi@gmail.com
          </p>
          <motion.a
            href="mailto:tanveermahidi@gmail.com"
            className="inline-block text-green-400 text-xs md:text-sm font-medium mt-2 hover:text-green-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Email
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className=""
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.form
          className="md:p-6 rounded-lg bg-gray-900"
          variants={formItemVariants}
        >
          <motion.h2
            className="text-[10px] md:text-2xl font-bold text-white mb-6 text-center"
            variants={formItemVariants}
          >
            Send Me a Message
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={formItemVariants}>
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 w-full bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-base"
              />
            </motion.div>
            <motion.div variants={formItemVariants}>
              <input
                type="text"
                placeholder="Subject"
                className="p-3 w-full bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-base"
              />
            </motion.div>
          </div>
          
          <motion.div variants={formItemVariants} className="mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 w-full bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-base"
            />
          </motion.div>
          
          <motion.div variants={formItemVariants} className="mt-4">
            <textarea
              placeholder="Your Message"
              className="p-3 w-full bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 h-32 text-xs md:text-base"
            ></textarea>
          </motion.div>
          
          <motion.button
            type="submit"
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 text-sm md:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Toggle Button for DynamicPortfolio */}
      <motion.button
        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 text-sm"
        onClick={togglePortfolio}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPortfolioVisible ? "Hide Portfolio" : "Thanks you"}
      </motion.button>

      {/* DynamicPortfolio Section */}
      {isPortfolioVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <DynamicPortfolio />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;