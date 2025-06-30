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
    <div className="grid grid-cols-10  ">
      {/* Sidebar Navigation */}
      <nav className="fixed col-span-5 m-5 h-full gap-2 bg-black md:p-4 flex flex-col justify-evenly md:items-center md:justify-center text-white shadow-lg">
        <div className="border-2  p-1 md:p-5 relative md:-top-20 flex items-center">
          <img className="lg:h-10 h-5" src={logo} alt="Logo" />
          <p className="font-bold md:text-xl text-[5px]">TANVER MAHIDI</p>
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
            className={`flex  border-b items-center md:p-3 p-2 w-full transition-all duration-300 rounded-[4px] ${
              visibleSection === item.id
                ? "s text-[#00BC80] font-bold"
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

      <div className=" col-span-10  m-5  ">
        <motion.section
          ref={homeRef}
          id="home"
          initial={{ opacity: 3, y: 0 }}
          animate={visibleSection === "home" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="    md:ml-70 ml-20  px-2   "
        >
          <Homee />
        </motion.section>

        <motion.section
          ref={aboutmeRef}
          id="aboutme"
          initial={{ opacity: 0, y: 0 }}
          animate={visibleSection === "aboutme" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className=" md:ml-70 ml-20  px-2 "
        >
          <Aboutme />
        </motion.section>

        <motion.section
          ref={serviceRef}
          id="service"
          initial={{ opacity: 0, y: 0 }}
          animate={visibleSection === "service" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:ml-70 ml-20  px-2 "
        >
          <Service />
        </motion.section>

        <motion.section
          ref={skillsRef}
          id="skills"
          initial={{ opacity: 0, y: 0 }}
          animate={visibleSection === "skills" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:ml-70 ml-20  px-2 "
        >
          <Skilss />
        </motion.section>

        <motion.section
          ref={portfolioRef}
          id="portfolio"
          initial={{ opacity: 0, y: 0 }}
          animate={visibleSection === "portfolio" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:ml-70 ml-20  px-2 "
        >
          <Portfolio />
        </motion.section>

        <motion.section
          ref={blogRef}
          id="blog"
          initial={{ opacity: 0, y: 0 }}
          animate={visibleSection === "blog" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:ml-70 ml-20  px-2 "
        >
          <Blog />
        </motion.section>

        <motion.section
          ref={contactRef}
          id="contact"
          initial={{ opacity: 0, y: 0 }}
          animate={visibleSection === "contact" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:ml-70 ml-20  px-2 "
        >
          <Contact />
        </motion.section>
      </div>
    </div>
  );
};

export default Home;