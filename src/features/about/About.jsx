import React from "react";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaCode, 
  FaServer, 
  FaLayerGroup, 
  FaBolt,
  FaTerminal,
  FaCheckCircle
} from "react-icons/fa";
import aboutData from "./aboutData";

const About = () => {
  const highlightIcons = [FaCode, FaServer, FaLayerGroup, FaBolt];

  return (
    <section id="about" className="py-24 relative bg-[#090a0f] border-t border-zinc-800/80">
      {/* Dev Background Grid */}
      <div className="absolute inset-0 bg-dev-lines opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
            <span>// 01.</span>
            <span className="uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Engineering Mindset & Background
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            A developer dedicated to crafting robust digital products, balancing high-fidelity frontend design with stable backend systems.
          </p>
        </div>

        {/* Developer Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {aboutData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200"
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] text-cyan-400 uppercase">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Narrative & Core Principles */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Bio Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-1">
              <FaTerminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>developer.philosophy</span>
            </div>

            {aboutData.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-zinc-300 text-base leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                #FullStackDevelopment
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                #ReactEcosystem
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                #CleanCode
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                #NodeBackend
              </span>
            </div>
          </div>

          {/* Right Column: 4 Core Competencies Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {aboutData.highlights.map((item, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-[#0e1017] border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education & Training (Timeline Git Style) */}
        <div className="pt-10 border-t border-zinc-800/80">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-3">
            <span>// 01.1</span>
            <span className="uppercase tracking-wider">Education & Credentials</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-8">
            Formal Learning & Technical Bootcamps
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {aboutData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {edu.badge}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      {edu.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-cyan-400/90 mb-3 font-mono">
                    {edu.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
