import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaDownload, 
  FaBars, 
  FaTimes, 
  FaTerminal, 
  FaArrowRight,
  FaHome,
  FaUser,
  FaLaptopCode,
  FaFolderOpen,
  FaEnvelope,
  FaSun,
  FaMoon
} from "react-icons/fa";
import { useTheme } from "../shared/context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  const navItems = [
    { 
      name: "Home", 
      path: "/", 
      tag: "00", 
      desc: "Overview, stack ribbon & highlights",
      icon: FaHome 
    },
    { 
      name: "About", 
      path: "/about", 
      tag: "01", 
      desc: "Engineering dossier & credentials",
      icon: FaUser 
    },
    { 
      name: "Skills", 
      path: "/skills", 
      tag: "02", 
      desc: "Technical radar & daily toolchain",
      icon: FaLaptopCode 
    },
    { 
      name: "Projects", 
      path: "/projects", 
      tag: "03", 
      desc: "Production systems & case studies",
      icon: FaFolderOpen 
    },
    { 
      name: "Contact", 
      path: "/contact", 
      tag: "04", 
      desc: "Direct transmission & availability",
      icon: FaEnvelope 
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change & restore scroll
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const currentNav = navItems.find((item) => 
    item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)
  ) || { name: "Home", tag: "00" };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#090a0f]/85 backdrop-blur-md border-b border-zinc-200 dark:border-white/[0.08] py-3 shadow-lg shadow-black/5 dark:shadow-black/40"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3"
            aria-label="Shruti Gupta Portfolio Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-700/80 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500/60 group-hover:text-cyan-500 transition-all shadow-inner">
              <FaTerminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm sm:text-base font-semibold text-zinc-900 dark:text-white tracking-tight flex items-center gap-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                <span>shruti.dev</span>
              </span>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1.5 ml-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              <span>available</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 shadow-sm"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 border border-transparent"
                  }`
                }
              >
                <span className="text-zinc-400 dark:text-zinc-500 text-[10px]">//{item.tag}</span>
                <span>{item.name.toLowerCase()}</span>
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions: Dark/Light Mode, GitHub, LinkedIn, Resume */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer"
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              title={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
              {isDark ? (
                <FaSun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-300" />
              ) : (
                <FaMoon className="w-4 h-4 text-indigo-600 animate-in spin-in-180 duration-300" />
              )}
            </button>

            <a
              href="https://github.com/shrutigupta7788"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shruti-gupta-169178305"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href="/Shruti Rajesh Gupta - Resume.pdf.pdf"
              download
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-800 dark:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 border border-zinc-300 dark:border-zinc-700 hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
            >
              <FaDownload className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              <span>resume.pdf</span>
            </a>
          </div>

          {/* Mobile Navigation Trigger & Theme Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="w-3.5 h-3.5 text-amber-400" /> : <FaMoon className="w-3.5 h-3.5 text-indigo-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white active:scale-95 transition-all shadow-sm"
              aria-label="Toggle Mobile Command Menu"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
              <span className="font-mono text-xs">
                //{currentNav.name.toLowerCase()}
              </span>
              {isOpen ? (
                <FaTimes className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 ml-1" />
              ) : (
                <FaBars className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 ml-1" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Modern Developer Command Overlay on Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-50 bg-white/98 dark:bg-[#090a0f]/98 backdrop-blur-2xl flex flex-col justify-between p-5 sm:p-6 overflow-y-auto text-zinc-900 dark:text-white"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <FaTerminal className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-mono text-sm font-bold tracking-tight block">
                    shruti.dev
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 block">
                    route_router://v2.4
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono"
                >
                  {isDark ? <FaSun className="w-3.5 h-3.5 text-amber-400" /> : <FaMoon className="w-3.5 h-3.5 text-indigo-600" />}
                  <span>{theme}</span>
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300"
                >
                  <span>close</span>
                  <FaTimes className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Simulated CLI Subheader */}
            <div className="py-4">
              <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-zinc-800/80 font-mono text-xs text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-cyan-600 dark:text-cyan-400">$</span>
                  <span className="truncate">navigate --target</span>
                </div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                  active: {currentNav.name}
                </span>
              </div>
            </div>

            {/* Navigation Nodes / Cards */}
            <div className="space-y-2.5 my-auto py-2">
              {navItems.map((item, idx) => {
                const IconComponent = item.icon;
                const isCurrent = item.path === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(item.path);

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.2 }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                        isCurrent
                          ? "bg-cyan-50 dark:bg-cyan-950/30 border-cyan-400 dark:border-cyan-500/40 shadow-lg shadow-cyan-500/5"
                          : "bg-zinc-50 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800/80 text-zinc-800 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                            isCurrent
                              ? "bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-400/30 dark:border-cyan-500/30"
                              : "bg-zinc-200 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                              ~/{item.name.toLowerCase()}
                            </span>
                            <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                              // {item.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-sans mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
                        )}
                        <FaArrowRight
                          className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${
                            isCurrent ? "text-cyan-600 dark:text-cyan-400" : "text-zinc-400 dark:text-zinc-600"
                          }`}
                        />
                      </div>
                    </NavLink>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions & Social Dock */}
            <div className="pt-5 border-t border-zinc-200 dark:border-zinc-800/80 space-y-3">
              {/* Resume download bar */}
              <a
                href="/Shruti Rajesh Gupta - Resume.pdf.pdf"
                download
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-xs font-semibold text-white bg-zinc-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-zinc-200 transition-all shadow-md active:scale-98"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Social and status row */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/shrutigupta7788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white font-mono text-xs"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-3.5 h-3.5 text-zinc-900 dark:text-white" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shruti-gupta-169178305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white font-mono text-xs"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                  <span>ready to hire</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
