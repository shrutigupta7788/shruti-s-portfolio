import React, { useState } from "react";
import { FaLaptopCode, FaTerminal, FaImage } from "react-icons/fa";

const ProjectThumbnail = ({
  src,
  alt = "Project Preview",
  title = "Project",
  category = "fullstack",
  domain = "project.app",
  techStack = [],
  className = "w-full h-full",
  variant = "card", // "card" | "detail"
}) => {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If image URL is missing or failed to load (404, CORS, offline)
  if (!src || imgError) {
    return (
      <div
        className={`w-full h-full relative flex flex-col justify-between p-5 bg-gradient-to-br from-zinc-900 via-[#0e121d] to-zinc-950 border-b border-zinc-800/80 overflow-hidden select-none transition-all duration-300 ${
          variant === "detail"
            ? "py-16 sm:py-20 min-h-[320px] sm:min-h-[380px] items-center justify-center text-center"
            : "min-h-[190px] sm:min-h-[208px]"
        }`}
      >
        {/* Subtle Ambient Glow & Grid Backdrop */}
        <div className="absolute inset-0 bg-dev-grid opacity-25 pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Info */}
        <div className="relative z-10 flex items-center justify-between w-full font-mono text-[11px]">
          <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
            <FaTerminal className="w-2.5 h-2.5" />
            <span>// preview_snapshot</span>
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/90 border border-zinc-700/60 text-zinc-400 uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* Center Mockup Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-2">
          <div className="w-11 h-11 rounded-xl bg-zinc-800/90 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2.5 shadow-lg shadow-cyan-500/5 group-hover:scale-110 transition-transform duration-300">
            <FaLaptopCode className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-semibold text-zinc-100 tracking-tight max-w-[240px] truncate">
            {title}
          </h4>
          <p className="font-mono text-[11px] text-zinc-400 mt-0.5">
            https://{domain || "project.app"}
          </p>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="relative z-10 flex items-center justify-between w-full pt-2.5 border-t border-zinc-800/60 font-mono text-[10px]">
          <div className="flex items-center gap-1.5 text-zinc-400 truncate max-w-[70%]">
            {techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-zinc-500">
                #{tech}
              </span>
            ))}
          </div>
          <span className="text-emerald-400 flex items-center gap-1 font-medium shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Online Demo
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-zinc-900 ${className}`}>
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-900/80 animate-pulse flex flex-col items-center justify-center gap-2 text-zinc-600">
          <FaImage className="w-5 h-5 animate-pulse text-zinc-500" />
          <span className="font-mono text-[10px] text-zinc-500">loading preview...</span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setImgError(true)}
        className={`w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ProjectThumbnail;
