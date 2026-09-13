import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaLock, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({
  id,
  title,
  description,
  image,
  techStack,
  liveLink,
  featured,
  domain,
  category,
}) => {
  return (
    <div className="group relative rounded-2xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/40 hover:shadow-xl dark:hover:shadow-cyan-500/5">
      {/* Window Browser Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 dark:bg-[#090b10] border-b border-zinc-200 dark:border-zinc-800/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700/80 group-hover:bg-rose-500/80 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700/80 group-hover:bg-amber-500/80 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700/80 group-hover:bg-emerald-500/80 transition-colors"></div>
        </div>

        {/* Simulated browser address */}
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 font-mono text-[11px] text-zinc-600 dark:text-zinc-400 shadow-xs">
          <FaLock className="w-2.5 h-2.5 text-zinc-400 dark:text-zinc-500" />
          <span className="truncate max-w-[140px] sm:max-w-[180px]">{domain || "project.app"}</span>
        </div>

        {featured ? (
          <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 font-medium px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/20">
            featured
          </span>
        ) : (
          <span className="font-mono text-[10px] text-zinc-500 uppercase">
            {category || "app"}
          </span>
        )}
      </div>

      {/* Project Preview Image Container with Link to Detail */}
      <Link 
        to={`/projects/${id}`}
        className="relative h-48 sm:h-52 overflow-hidden bg-zinc-900 block cursor-pointer"
        title="View Project Case Study"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#0d0f17] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-700 text-xs font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
            <span>Read Case Study</span>
            <FaArrowRight className="w-2.5 h-2.5" />
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Title */}
        <Link to={`/projects/${id}`} className="group/title block">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2.5 tracking-tight group-hover/title:text-cyan-600 dark:group-hover/title:text-cyan-300 transition-colors line-clamp-1">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 flex-grow line-clamp-3 font-normal">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-1.5 min-h-[26px]">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[11px]"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Action Button: Only Live Demo */}
        <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-zinc-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-zinc-200 transition-all duration-200 active:scale-98 text-center shadow-sm"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
