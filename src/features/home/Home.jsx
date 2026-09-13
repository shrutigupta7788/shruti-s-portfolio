import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaArrowRight, 
  FaDownload, 
  FaCopy, 
  FaCheck, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaCode,
  FaTerminal
} from "react-icons/fa";
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiVite,
  SiHtml5,
  SiCss3,
  SiFigma
} from "react-icons/si";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const email = "guptashruti7788@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techRibbon = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Vite", icon: SiVite, color: "#BD34FE" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Dev Ambient Glow Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-dev-grid opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Monospace Developer Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-xs font-mono mb-6 text-zinc-700 dark:text-zinc-300 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              <span className="text-zinc-500 dark:text-zinc-400">status:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">ready for new opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.15] mb-6"
            >
              Crafting modern web architectures &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400">
                high-impact apps.
              </span>
            </motion.h1>

            {/* Developer Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-8 font-normal"
            >
              Hi, I'm <span className="text-zinc-900 dark:text-white font-medium">Shruti Gupta</span> &mdash; a Software & Frontend Developer based in Mumbai. 
              I design and build performant, responsive web applications utilizing modern React.js, 
              clean Node.js APIs, and elegant UI design systems.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-zinc-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-zinc-200 transition-all duration-200 shadow-md shadow-black/5 active:scale-98"
              >
                <span>Explore Projects</span>
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="/Shruti Rajesh Gupta - Resume.pdf.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/90 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 active:scale-98"
              >
                <FaDownload className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Resume</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-950/80 dark:hover:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-cyan-500/40 transition-all duration-200"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                    <span className="truncate max-w-[150px] sm:max-w-none">{email}</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400"
            >
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">// connect:</span>
              <a
                href="https://github.com/shrutigupta7788"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-all shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shruti-gupta-169178305"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:guptashruti7788@gmail.com"
                className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-all shadow-sm"
                aria-label="Direct Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Code Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0d0f17] border border-zinc-800/90 shadow-2xl shadow-black/80">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0a0c12] border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                  <FaCode className="w-3 h-3 text-cyan-400" />
                  <span>developer.ts</span>
                </div>

                <span className="font-mono text-[10px] text-zinc-500">git:(main)</span>
              </div>

              {/* Editor Tab Bar */}
              <div className="flex items-center border-b border-zinc-800/60 bg-[#0d0f17] px-2 pt-2 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-2 ${
                    activeTab === "profile"
                      ? "bg-[#131622] text-cyan-400 border-t border-x border-zinc-800"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <span className="text-[10px] text-zinc-500">TS</span>
                  <span>profile.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab("stack")}
                  className={`px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-2 ${
                    activeTab === "stack"
                      ? "bg-[#131622] text-cyan-400 border-t border-x border-zinc-800"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <span className="text-[10px] text-zinc-500">JSON</span>
                  <span>stack.json</span>
                </button>
              </div>

              {/* Code Snippet Area */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-300">
                {activeTab === "profile" ? (
                  <div>
                    <p className="text-zinc-500 italic">// Developer Identity Definition</p>
                    <p className="mt-1">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-cyan-300">developer</span>:{" "}
                      <span className="text-amber-300">SoftwareEngineer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">name:</span>{" "}
                      <span className="text-emerald-300">"Shruti Gupta"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">role:</span>{" "}
                      <span className="text-emerald-300">"Full-Stack & Frontend Engineer"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">location:</span>{" "}
                      <span className="text-emerald-300">"Mumbai, India"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">education:</span> &#123;
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">degree:</span>{" "}
                      <span className="text-emerald-300">"B.Sc. Information Technology"</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-zinc-400">period:</span>{" "}
                      <span className="text-amber-300">"2022 - 2025"</span>
                    </p>
                    <p className="pl-4">&#125;,</p>
                    <p className="pl-4">
                      <span className="text-zinc-400">status:</span>{" "}
                      <span className="text-emerald-400">"Ready to build impactful systems"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">hireable:</span>{" "}
                      <span className="text-purple-400">true</span>
                    </p>
                    <p>&#125;;</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-zinc-500 italic">// Primary Engineering Stack</p>
                    <p className="mt-1">&#123;</p>
                    <p className="pl-4">
                      <span className="text-purple-400">"frontend"</span>: [
                    </p>
                    <p className="pl-8 text-emerald-300">
                      "React.js", "Tailwind CSS", "JavaScript ES6+", "HTML5/CSS3"
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-purple-400">"backend"</span>: [
                    </p>
                    <p className="pl-8 text-emerald-300">
                      "Node.js", "Express.js", "MongoDB", "RESTful APIs"
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-purple-400">"tools"</span>: [
                    </p>
                    <p className="pl-8 text-emerald-300">
                      "Git", "GitHub", "Vite", "Figma", "Postman"
                    </p>
                    <p className="pl-4">]</p>
                    <p>&#125;</p>
                  </div>
                )}
              </div>

              {/* Terminal Bottom Status Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#0a0c12] border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  UTF-8
                </span>
                <span>Prettier: formatted</span>
                <span className="text-cyan-400">TypeScript</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800/80"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              // Core Development Technologies
            </span>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              Battle-tested &amp; Production-Ready
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
            {techRibbon.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 shadow-sm"
              >
                <tech.icon
                  className="w-6 h-6 mb-2 transition-transform duration-200 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="font-mono text-[11px] text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
