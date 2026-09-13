import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaSearch, FaArrowRight } from "react-icons/fa";
import projectsData from "../features/projects/projectsData";
import ProjectCard from "../features/projects/ProjectCard";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", label: "All Projects", count: projectsData.length },
    { id: "featured", label: "Featured", count: projectsData.filter((p) => p.featured).length },
    { id: "fullstack", label: "Full Stack", count: projectsData.filter((p) => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend", count: projectsData.filter((p) => p.category === "frontend").length },
    { id: "ui", label: "UI & Motion", count: projectsData.filter((p) => p.category === "ui").length },
  ];

  const getFilteredProjects = () => {
    return projectsData.filter((project) => {
      if (filter === "featured" && !project.featured) return false;
      if (filter === "fullstack" && project.category !== "fullstack") return false;
      if (filter === "frontend" && project.category !== "frontend") return false;
      if (filter === "ui" && project.category !== "ui") return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(q);
        const matchesDesc = project.description.toLowerCase().includes(q);
        const matchesTech = project.techStack.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTech) return false;
      }

      return true;
    });
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
      {/* Page Header with Breadcrumb */}
      <div className="border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-3">
          <Link to="/" className="hover:text-zinc-800 dark:hover:text-zinc-300">~/home</Link>
          <span>/</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">projects</span>
        </div>

        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
          <span>// 03. PROJECT ARCHIVES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Production Systems &amp; Applications
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
          An organized portfolio of full-stack web platforms, client solutions, and interactive design experiments. Click any project to inspect its architecture case study.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800/80">
        <div className="flex flex-wrap gap-2">
          {filters.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-zinc-200 dark:bg-zinc-800 text-cyan-800 dark:text-cyan-300 border border-cyan-400/40 dark:border-cyan-500/30 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-900/40 hover:bg-zinc-200 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search by name, tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-xs font-mono text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 shadow-xs transition-all"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs text-zinc-500">
            Displaying {filteredProjects.length} of {projectsData.length} Projects
          </span>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-600 dark:text-zinc-400 font-mono text-sm mb-2">
              No projects found matching current filter or search criteria.
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setSearchQuery("");
              }}
              className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* GitHub Callout */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white shrink-0">
            <FaGithub className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Looking for more repositories &amp; open source code?
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Explore all branches, experiments, and commits directly on GitHub.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/shrutigupta7788"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-zinc-800 dark:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700 transition-all shrink-0"
        >
          <span>github.com/shrutigupta7788</span>
          <FaArrowRight className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
