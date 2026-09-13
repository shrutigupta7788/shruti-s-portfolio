import React from "react";
import { Link } from "react-router-dom";
import { 
  FaTerminal, 
  FaCode, 
  FaServer, 
  FaLayerGroup, 
  FaBolt, 
  FaDownload, 
  FaArrowRight
} from "react-icons/fa";
import aboutData from "../features/about/aboutData";

const AboutPage = () => {
  const highlightIcons = [FaCode, FaServer, FaLayerGroup, FaBolt];

  const workflowSteps = [
    { step: "01", title: "Problem Scoping & Architecture", desc: "Analyzing technical requirements, database schemas, and component hierarchies before writing code." },
    { step: "02", title: "Component & API Prototyping", desc: "Developing modular, reusable React components and writing clean RESTful endpoints." },
    { step: "03", title: "Testing, Styling & Refinement", desc: "Ensuring responsive layout adherence with Tailwind CSS, verifying API edge cases, and testing browser compatibility." },
    { step: "04", title: "Deployment & Optimization", desc: "Setting up Vite production builds, optimizing asset delivery, and deploying on platforms like Vercel." },
  ];

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
      {/* Page Header with Breadcrumb */}
      <div className="border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-3">
          <Link to="/" className="hover:text-zinc-800 dark:hover:text-zinc-300">~/home</Link>
          <span>/</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">about</span>
        </div>

        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
          <span>// 01. ENGINEERING DOSSIER</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Background, Philosophy &amp; Credentials
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
          Get to know my journey as a software developer, my educational foundation in Information Technology, and what drives my engineering approach.
        </p>
      </div>

      {/* Developer Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {aboutData.stats.map((stat, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between shadow-sm"
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
                {stat.suffix}
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Narrative Section */}
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400">
            <FaTerminal className="w-3.5 h-3.5" />
            <span>developer.story</span>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Bridging Frontend Aesthetics with Backend Robustness
          </h2>

          {aboutData.bio.map((para, i) => (
            <p key={i} className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
              {para}
            </p>
          ))}

          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href="/Shruti Rajesh Gupta - Resume.pdf.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-white bg-zinc-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-zinc-200 transition-all shadow-md"
            >
              <FaDownload className="w-3.5 h-3.5" />
              <span>Download Official Resume</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-zinc-800 dark:text-zinc-300 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all"
            >
              <span>Get in Touch</span>
              <FaArrowRight className="w-2.5 h-2.5 text-cyan-600 dark:text-cyan-400" />
            </Link>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            // Core Engineering Pillars
          </h3>
          {aboutData.highlights.map((item, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];
            return (
              <div
                key={index}
                className="p-5 rounded-xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white tracking-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-10">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Engineering Workflow */}
      <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
          <span>// 01.2 DEVELOPMENT METHODOLOGY</span>
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
          How I Build &amp; Ship Software
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowSteps.map((ws) => (
            <div
              key={ws.step}
              className="p-5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold block mb-2">
                  // {ws.step}
                </span>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  {ws.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Credentials */}
      <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
          <span>// 01.3 FORMAL CREDENTIALS</span>
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
          Education &amp; Training
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {aboutData.education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                    {edu.badge}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    {edu.year}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1.5 tracking-tight">
                  {edu.degree}
                </h4>
                <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400 mb-3 font-mono">
                  {edu.institution}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
