import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiVite, 
  SiPostman, 
  SiFigma, 
  SiNpm,
  SiTypescript,
  SiNextdotjs,
  SiDocker
} from "react-icons/si";
import { 
  FaServer, 
  FaCode, 
  FaMobileAlt, 
  FaBolt, 
  FaLayerGroup,
  FaArrowRight,
  FaSearch
} from "react-icons/fa";
import skillsData from "../features/skills/skillsData";

const iconMap = {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiFigma,
  SiNpm,
  FaServer,
  FaCode,
  FaMobileAlt,
  FaBolt,
  FaLayerGroup,
};

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Stack", tag: "all" },
    { id: "frontend", label: "Frontend", tag: "01" },
    { id: "backend", label: "Backend & DB", tag: "02" },
    { id: "tools", label: "Dev Tools", tag: "03" },
    { id: "principles", label: "Practices", tag: "04" },
  ];

  const getSkills = () => {
    let list = [];
    if (activeCategory === "all") {
      Object.keys(skillsData).forEach((cat) => {
        skillsData[cat].skills.forEach((skill) => {
          list.push({ ...skill, category: cat });
        });
      });
    } else {
      list = skillsData[activeCategory]?.skills.map((s) => ({ ...s, category: activeCategory })) || [];
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) => s.name.toLowerCase().includes(q) || s.detail.toLowerCase().includes(q)
      );
    }

    return list;
  };

  const displayedSkills = getSkills();

  const radarNext = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", note: "Type safety & scalable enterprise codebase" },
    { name: "Next.js", icon: SiNextdotjs, isMonochrome: true, note: "Server-side rendering & hybrid React apps" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", note: "Containerized environments & reliable CI" },
  ];

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
      {/* Page Header with Breadcrumb */}
      <div className="border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-3">
          <Link to="/" className="hover:text-zinc-800 dark:hover:text-zinc-300">~/home</Link>
          <span>/</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">skills</span>
        </div>

        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
          <span>// 02. TECHNICAL RADAR</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Tech Stack, Frameworks &amp; Practices
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
          An exhaustive inventory of the technologies, libraries, databases, and developer tooling I use to engineer robust applications.
        </p>
      </div>

      {/* Controls Bar: Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800/80">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-zinc-200 dark:bg-zinc-800 text-cyan-800 dark:text-cyan-300 border border-cyan-400/40 dark:border-cyan-500/30 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-900/40 hover:bg-zinc-200 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80"
                }`}
              >
                <span className="text-zinc-400 dark:text-zinc-500 text-[11px]">// {cat.tag}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-xs font-mono text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 shadow-xs transition-all"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs text-zinc-500">
            Showing {displayedSkills.length} Technologies
          </span>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || FaCode;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group relative p-5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/70 transition-all duration-200 flex flex-col justify-between shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-zinc-100 dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center transition-transform group-hover:scale-110 ${
                          skill.isMonochrome ? "text-zinc-900 dark:text-white" : ""
                        }`}
                        style={!skill.isMonochrome ? { color: skill.color } : undefined}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                        skill.level === "Advanced"
                          ? "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20"
                          : skill.level === "Proficient"
                          ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/20"
                          : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-1">
                    {skill.detail}
                  </p>

                  {/* Subtle brand glow line */}
                  <div 
                    className={`absolute bottom-0 left-5 right-5 h-[1px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${
                      skill.isMonochrome ? "bg-zinc-900 dark:bg-white" : ""
                    }`}
                    style={!skill.isMonochrome ? { background: skill.color } : undefined}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {displayedSkills.length === 0 && (
          <div className="text-center py-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-600 dark:text-zinc-400 font-mono text-sm">
              No technology found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-3 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Technologies Next on Radar */}
      <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
          <span>// 02.2 UPCOMING ON TECH RADAR</span>
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
          Currently Exploring &amp; Integrating
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {radarNext.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3.5 shadow-sm"
            >
              <div
                className={`w-9 h-9 rounded-lg bg-zinc-100 dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0 ${
                  tech.isMonochrome ? "text-zinc-900 dark:text-white" : ""
                }`}
                style={!tech.isMonochrome ? { color: tech.color } : undefined}
              >
                <tech.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">
                  {tech.name}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {tech.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA to Projects */}
      <div className="p-8 rounded-2xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
            See how these technologies power real applications
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
            Browse through full-stack platforms, client projects, and interactive developer interfaces.
          </p>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold text-white bg-zinc-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-zinc-200 transition-all shadow-md shrink-0"
        >
          <span>Explore Projects</span>
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default SkillsPage;
