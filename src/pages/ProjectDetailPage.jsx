import React from "react";
import { useParams, Link } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaExternalLinkAlt, 
  FaLock, 
  FaCheckCircle, 
  FaTools, 
  FaLightbulb 
} from "react-icons/fa";
import projectsData from "../features/projects/projectsData";

const ProjectDetailPage = () => {
  const { id } = useParams();

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="pt-36 pb-24 max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800 font-mono shadow-sm">
          <p className="text-rose-500 dark:text-rose-400 text-sm mb-3">// 404: project_not_found</p>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Project "{id}" does not exist in registry.
          </h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-800 dark:text-white text-xs hover:bg-black dark:hover:bg-zinc-700 transition-all"
          >
            <FaArrowLeft className="w-3 h-3" />
            <span>Return to Project Gallery</span>
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-6">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <Link to="/" className="hover:text-zinc-800 dark:hover:text-zinc-300">~/home</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-zinc-800 dark:hover:text-zinc-300">projects</Link>
          <span>/</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">{project.id}</span>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
        >
          <FaArrowLeft className="w-3 h-3" />
          <span>All Projects</span>
        </Link>
      </div>

      {/* Project Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 uppercase">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
              Featured Case Study
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3 leading-tight">
          {project.title}
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          {project.tagline || project.description}
        </p>

        {/* Action Button: Only Live Demo */}
        <div className="pt-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold text-white bg-zinc-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-zinc-200 transition-all shadow-md active:scale-98"
          >
            <span>Launch Live Deployment</span>
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Browser Mockup Window */}
      <div className="rounded-2xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800/80 overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-black/80">
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-[#090b10] border-b border-zinc-200 dark:border-zinc-800/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>

          <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <FaLock className="w-2.5 h-2.5 text-zinc-400 dark:text-zinc-500" />
            <span>https://{project.domain || "preview.live"}</span>
          </div>

          <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">production_build</span>
        </div>

        <div className="relative aspect-video max-h-[500px] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Case Study Details Grid */}
      <div className="grid md:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative & Highlights */}
        <div className="md:col-span-8 space-y-10">
          {/* Executive Overview */}
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">
              Executive Overview
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight flex items-center gap-2">
                <FaTools className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Key Technical Features</span>
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <FaCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenge & Solution */}
          {project.challenges && (
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0e1018] border border-zinc-200 dark:border-zinc-800/80 space-y-4">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <FaLightbulb className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Engineering Challenge &amp; Solution</span>
              </h3>

              <div>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase mb-1 font-semibold">
                  // The Challenge:
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase mb-1 font-semibold">
                  // The Implementation:
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.solutions}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Metadata Sidebar */}
        <div className="md:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 space-y-6 shadow-sm">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">
                // Architecture &amp; Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-700 dark:text-zinc-300"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">
                // Category
              </h4>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white uppercase font-mono">
                {project.category}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">
                // Status
              </h4>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">Deployed &amp; Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Project Navigation Bar */}
      <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 gap-4">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.id}`}
            className="p-4 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-left group shadow-sm"
          >
            <span className="font-mono text-[11px] text-zinc-500 flex items-center gap-1 mb-1">
              <FaArrowLeft className="w-2.5 h-2.5" />
              <span>Previous Project</span>
            </span>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors truncate">
              {prevProject.title}
            </p>
          </Link>
        ) : (
          <div></div>
        )}

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.id}`}
            className="p-4 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-right group shadow-sm"
          >
            <span className="font-mono text-[11px] text-zinc-500 flex items-center justify-end gap-1 mb-1">
              <span>Next Project</span>
              <FaArrowRight className="w-2.5 h-2.5" />
            </span>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors truncate">
              {nextProject.title}
            </p>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
