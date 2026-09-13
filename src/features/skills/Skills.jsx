import React, { useState } from "react";
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
  SiNpm 
} from "react-icons/si";
import { 
  FaServer, 
  FaCode, 
  FaMobileAlt, 
  FaBolt, 
  FaLayerGroup,
  FaTerminal,
  FaCheckCircle
} from "react-icons/fa";
import skillsData from "./skillsData";

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

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies", tag: "all" },
    { id: "frontend", label: "Frontend", tag: "01" },
    { id: "backend", label: "Backend & DB", tag: "02" },
    { id: "tools", label: "Dev Tools", tag: "03" },
    { id: "principles", label: "Practices", tag: "04" },
  ];

  // Aggregate skills based on filter
  const getDisplayedSkills = () => {
    if (activeTab === "all") {
      const all = [];
      Object.keys(skillsData).forEach((cat) => {
        skillsData[cat].skills.forEach((skill) => {
          all.push({ ...skill, category: cat });
        });
      });
      return all;
    }
    return skillsData[activeTab]?.skills.map((s) => ({ ...s, category: activeTab })) || [];
  };

  const displayedSkills = getDisplayedSkills();

  return (
    <section id="skills" className="py-24 relative bg-[#090a0f] border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
            <span>// 02.</span>
            <span className="uppercase tracking-wider">Tech Stack & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Tools, Frameworks & Core Systems
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            A comprehensive overview of my daily development stack, software proficiencies, and architectural practices.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-800/80">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-zinc-800 text-cyan-300 border border-cyan-500/30 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80"
                }`}
              >
                <span className="text-zinc-500 text-[11px]">// {cat.tag}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
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
                  transition={{ duration: 0.25 }}
                  className="group relative p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-[#0d0f17] border border-zinc-800 flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-zinc-500 uppercase">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                        skill.level === "Advanced"
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          : skill.level === "Proficient"
                          ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed pl-1">
                    {skill.detail}
                  </p>

                  {/* Subtle brand glow line */}
                  <div 
                    className="absolute bottom-0 left-5 right-5 h-[1px] opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ background: skill.color }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Developer Philosophy Callout */}
        <div className="p-6 rounded-2xl bg-[#0d0f17] border border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 shrink-0">
              <FaTerminal className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Continuous Technical Evolution
              </h4>
              <p className="text-xs text-zinc-400">
                Always learning new standards, testing developer tools, and improving software architecture.
              </p>
            </div>
          </div>

          <span className="font-mono text-xs text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-auto shrink-0">
            TypeScript & Next.js in active practice
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
