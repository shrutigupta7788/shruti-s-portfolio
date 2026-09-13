import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", count: projectsData.length },
    { id: "featured", label: "Featured", count: projectsData.filter((p) => p.featured).length },
    { id: "fullstack", label: "Full Stack", count: projectsData.filter((p) => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend & UI", count: projectsData.filter((p) => p.category === "frontend" || p.category === "ui").length },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "fullstack") return project.category === "fullstack";
    if (filter === "frontend") return project.category === "frontend" || project.category === "ui";
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#090a0f] border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
            <span>// 03.</span>
            <span className="uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Production & Showcase Projects
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            A curated list of full-stack platforms, client websites, and interactive interfaces built with clean architecture and modern UX standards.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-800/80">
          {filters.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-zinc-800 text-cyan-300 border border-cyan-500/30 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-cyan-500/20 text-cyan-300" : "bg-zinc-800 text-zinc-500"}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id || project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repositories Callout */}
        <div className="p-6 rounded-2xl bg-[#0d0f17] border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0">
              <FaGithub className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Looking for more source code & repositories?
              </h4>
              <p className="text-xs text-zinc-400">
                Explore all experiments, utilities, and commits directly on my GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/shrutigupta7788"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all shrink-0"
          >
            <span>github.com/shrutigupta7788</span>
            <FaArrowRight className="w-3 h-3 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
