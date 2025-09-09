import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Starfield from "../../shared/components/Starfield";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from "react-icons/fa";
import HomeData from "./HomeData";
const Home = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
    "FullStack Developer ",
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentRole = roles[currentIndex];

      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, typeSpeed);
    return () => clearTimeout(timer);
  }, [text, currentIndex, isDeleting, roles]);

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/shrutigupta7788",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shruti-gupta-169178305",
      label: "LinkedIn",
    },
    // { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    {
      icon: FaEnvelope,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=guptashruti7788@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <Starfield starCount={350} speed={0.015} />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          {HomeData.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6 h-12"
        >
          I'm a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {text}
          </span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {HomeData.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="/Shruti Rajesh Gupta - Resume.pdf.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold inline-flex items-center gap-2"
          >
            <FaDownload className="w-5 h-5" />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
