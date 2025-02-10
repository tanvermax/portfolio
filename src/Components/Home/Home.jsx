import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "./../../assets/logo2.png"
import {
  Home as HomeIcon,
  User,
  Briefcase,
  Layers,
  Image,
  Book,
  Mail,
} from "lucide-react";
import Aboutme from "../Pages/Aboutme";
import Blog from "../Pages/Blog";
import Service from "../Pages/Service";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";
import Homee from "../Pages/Homee";
import Skilss from "../Pages/Skilss";

const Home = () => {
  const homeRef = useRef(null);
  const aboutmeRef = useRef(null);
  const serviceRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    home: homeRef,
    aboutme: aboutmeRef,
    service: serviceRef,
    skills: skillsRef,
    portfolio: portfolioRef,
    blog: blogRef,
    contact: contactRef,
  };

  const [visibleSection, setVisibleSection] = useState("home");

  const scrollToSection = (section) => {
    
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });

    // Ensure state updates after scrolling
    setTimeout(() => setVisibleSection(section), 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = entries.find((entry) => entry.isIntersecting);
        if (mostVisible) setVisibleSection(mostVisible.target.id);
      },
      { threshold: 0.5 } // Ensure at least 50% visibility
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
      {/* Sidebar Navigation */}
      <nav className="fixed z-20 left-2 top-8 h-full md:w-72 w-16 bg-black md:p-4 flex flex-col gap-6 md:items-center md:justify-center text-white shadow-lg">
        <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-black p-1 md:p-5 relative md:-top-20 flex items-center">
          <img className="h-10" src={logo} alt="Logo" />
          <p className="font-bold md:text-2xl text-[8px]">TANVER MAHIDI</p>
        </div>
        {[
          {
            id: "home",
            label: "Home",
            icon: (
              <>
                <HomeIcon className="hidden md:block" size={35} />
                <HomeIcon className="md:hidden p-1" size={15} />
              </>
            ),
          },
          {
            id: "aboutme",
            label: "About",
            icon: (
              <>
                <User size={24} className="hidden md:block" />
                <User className="md:hidden p-1" size={15} />
              </>
            ),
          },
          {
            id: "service",
            label: "Service",
            icon: (
              <>
                <Briefcase size={24} className="hidden md:block" />
                <Briefcase className="md:hidden p-1" size={15} />
              </>
            ),
          },
          {
            id: "skills",
            label: "Skills",
            icon: (
              <>
                <Layers size={24} className="hidden md:block" />
                <Layers className="md:hidden p-1" size={15} />
              </>
            ),
          },
          {
            id: "portfolio",
            label: "Portfolio",
            icon: (
              <>
                <Image size={24} className="hidden md:block" />
                <Image className="md:hidden p-1" size={15} />
              </>
            ),
          },
          {
            id: "blog",
            label: "Blog",
            icon: (
              <>
                <Book size={24} className="hidden md:block" />
                <Book className="md:hidden p-1" size={15} />
              </>
            ),
          },
          {
            id: "contact",
            label: "Contact",
            icon: (
              <>
                <Mail size={24} className="hidden md:block" />
                <Mail className="md:hidden p-1" size={15} />
              </>
            ),
          },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center md:p-3 w-full transition-all duration-300 rounded-md ${
              visibleSection === item.id
                ? "bg-emerald-500 text-black font-bold"
                : "text-white hover:bg-gray-700"
            }`}
          >
            {item.icon}
            <span className="md:text-xl text-[8px] md:mt-1 md:ml-3 ">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <div className="relative h-[100vh]  md:pl-72 md:w-[100vw] md:overflow-y-auto md:overflow-x-hidden">
        <motion.section
          ref={homeRef}
          id="home"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "home" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className=" md:min-h-screen flex items-center justify-center bg-black relative   text-white"
        >
          <Homee />
        </motion.section>

        <motion.section
          ref={aboutmeRef}
          id="aboutme"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "aboutme" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative left-0 flex items-center justify-center bg-black  text-white"
        >
          <Aboutme />
        </motion.section>

        <motion.section
          ref={serviceRef}
          id="service"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "service" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:min-h-screen flex items-center justify-center bg-black relative   text-white"
        >
          <Service />
        </motion.section>

        <motion.section
          ref={skillsRef}
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "skills" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:min-h-screen flex items-center justify-center bg-black relative   text-white"
        >
          <Skilss />
        </motion.section>

        <motion.section
          ref={portfolioRef}
          id="portfolio"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "portfolio" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black flex items-center justify-center  text-white"
        >
          <Portfolio />
        </motion.section>

        <motion.section
          ref={blogRef}
          id="blog"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "blog" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black flex items-center justify-center  text-white"
        >
          <Blog />
        </motion.section>

        <motion.section
          ref={contactRef}
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          animate={visibleSection === "contact" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-black text-white"
        >
          <Contact />
        </motion.section>
      </div>
    </div>
  );
};

export default Home;