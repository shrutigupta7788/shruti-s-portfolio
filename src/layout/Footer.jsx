import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/shrutigupta7788", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/shruti-gupta-169178305", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:guptashruti7788@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "home", path: "/", tag: "00" },
    { name: "about", path: "/about", tag: "01" },
    { name: "skills", path: "/skills", tag: "02" },
    { name: "projects", path: "/projects", tag: "03" },
    { name: "contact", path: "/contact", tag: "04" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-100 dark:bg-[#07080c] border-t border-zinc-200 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 py-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200 dark:border-zinc-800/80">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-2 group inline-block">
              <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                <FaTerminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-lg font-bold text-zinc-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                shruti.dev
              </span>
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm leading-relaxed">
              Software & Frontend Developer focused on building high-performance, responsive web architectures with modern React, Node.js, and clean code.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-300">
              // Navigation
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-zinc-400 dark:text-zinc-600">// {link.tag}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dev Status Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-300">
              // System Info
            </h4>
            <div className="space-y-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                <span className="text-emerald-600 dark:text-emerald-400">All systems normal</span>
              </div>
              <p>Routing: Multi-Page Client SPA</p>
              <p>Location: Mumbai, India (IST)</p>
              <p>Theme: System Aware (Dark &amp; Light)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Shruti Gupta. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
