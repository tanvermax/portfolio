import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home as HomeIcon, User, Briefcase, Layers, Image, Book, Mail } from "lucide-react"; // Importing icons
import Aboutme from "../Pages/Aboutme";
import Blog from "../Pages/Blog";
import Service from "../Pages/Service";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";
import Homee from "../Pages/Homee";
import Skilss from "../Pages/Skilss";

const Home = () => {
  const sections = {
    home: useRef(null),
    aboutme: useRef(null),
    service: useRef(null),
    skills: useRef(null),
    portfolio: useRef(null),
    blog: useRef(null),
    contact: useRef(null),
  };

  const [visibleSection, setVisibleSection] = useState("home");

  const scrollToSection = (section) => {
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sections).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="flex bg-black">
      {/* Left Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-72 bg-gray-900 p-4 flex flex-col gap-6 items-center justify-center text-white shadow-lg">
      <div className="bg-black p-5 flex  items-center">
        <img src="/src/assets/logo2.png" alt="" />
        <p className="font-bold text-2xl">TANVER MAHIDI</p>
      </div>
        {[
          { id: "home", label:  "Home", icon: <HomeIcon size={35} /> },
          { id: "aboutme", label: "About", icon: <User size={24} /> },
          { id: "service", label: "Service", icon: <Briefcase size={24} /> },
          { id: "skills", label: "Skills", icon: <Layers size={24} /> },
          { id: "portfolio", label: "Portfolio", icon: <Image size={24} /> },
          { id: "blog", label: "Blog", icon: <Book size={24} /> },
          { id: "contact", label: "Contact", icon: <Mail size={24} /> },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex  items-center p-3 w-full transition-all duration-300 rounded-md ${
              visibleSection === item.id
                ? "bg-emerald-500 text-black font-bold"
                : "text-white hover:bg-gray-700"
            }`}
          >
            {item.icon}
            <span className="text-xl mt-1 ml-3">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <div className="relative left-72 w-[83vw] ">
        <motion.section
          ref={sections.home}
          id="home"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "home" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
        >
          <Homee />
        </motion.section>

        <motion.section
          ref={sections.aboutme}
          id="aboutme"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "aboutme" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
        >
          <Aboutme />
        </motion.section>

        <motion.section
          ref={sections.service}
          id="service"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "service" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
        >
          <Service />
        </motion.section>

        <motion.section
          ref={sections.skills}
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "skills" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
        >
          <Skilss />
        </motion.section>

        <motion.section
          ref={sections.portfolio}
          id="portfolio"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "portfolio" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
        >
          <Portfolio />
        </motion.section>

        <motion.section
          ref={sections.blog}
          id="blog"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "blog" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
        >
          <Blog />
        </motion.section>

        <motion.section
          ref={sections.contact}
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "contact" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
        >
          <Contact />
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
