import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTerminal, FaCode, FaServer, FaLayerGroup } from "react-icons/fa";
import Home from "../features/home/Home";
import ProjectCard from "../features/projects/ProjectCard";
import projectsData from "../features/projects/projectsData";
import aboutData from "../features/about/aboutData";

const HomePage = () => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <Home />

      {/* Metrics Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
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
      </section>

      {/* Featured Projects Showcase Teaser */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2">
              <span>// 01. HIGHLIGHTS</span>
              <span className="uppercase tracking-wider">Featured Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Selected Production &amp; Showcase Systems
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors group self-start sm:self-auto"
          >
            <span>View All {projectsData.length} Projects</span>
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold text-zinc-900 dark:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/80 hover:border-cyan-500/40 transition-all shadow-md"
          >
            <span>Browse Complete Project Gallery</span>
            <FaArrowRight className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
          </Link>
        </div>
      </section>

      {/* Engineering Competencies Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800/80 shadow-md">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400">
                <FaTerminal className="w-3 h-3" />
                <span>// 02. ARCHITECTURE &amp; PRINCIPLES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                Designed for Reliability, Performance &amp; Scale
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                I specialize in bridging high-fidelity UI design with scalable backend logic. My code prioritizes maintainability, fast initial loads, clean component abstraction, and intuitive UX.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-zinc-900 dark:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700 transition-all"
                >
                  <span>Read Full Engineering Bio</span>
                  <FaArrowRight className="w-2.5 h-2.5 text-cyan-600 dark:text-cyan-400" />
                </Link>
                <Link
                  to="/skills"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-950/40 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800/50 transition-all"
                >
                  <span>Explore Tech Radar</span>
                  <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
                <FaCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mb-2" />
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">Frontend UI</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">React, Tailwind CSS, Responsive Design</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
                <FaServer className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">Backend APIs</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Node.js, Express, MongoDB REST</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
                <FaLayerGroup className="w-4 h-4 text-purple-600 dark:text-purple-400 mb-2" />
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">Clean Arch</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Modular code, Git branches, linting</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
                <FaTerminal className="w-4 h-4 text-amber-600 dark:text-amber-400 mb-2" />
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">Tooling</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Vite, Postman, Figma, NPM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-zinc-100 via-white to-zinc-100 dark:from-zinc-900 dark:via-[#10131d] dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">// Ready to hire?</span>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight mt-1">
              Have an opening or project in mind?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1 max-w-md">
              I'm open to discussing full-time engineering roles, frontend contracts, and collaborative software projects.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl font-semibold text-xs font-mono text-white bg-zinc-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-zinc-200 transition-all shadow-md active:scale-98"
            >
              Get In Touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
