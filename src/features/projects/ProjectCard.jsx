import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  liveLink,
  githubLink,
  featured,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden border border-gray-200/80 dark:border-gray-800 flex flex-col h-full"
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3.5 right-3.5 z-10">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md shadow-orange-500/20 backdrop-blur-md">
            <FaStar className="w-3 h-3 text-yellow-200" />
            Featured
          </div>
        </div>
      )}

      {/* Image container */}
      <div className="relative h-52 overflow-hidden flex-shrink-0 bg-gray-900">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2.5 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6 flex-shrink-0">
          <div className="flex flex-wrap gap-1.5 min-h-[28px]">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/40 text-xs rounded-md font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto pt-2 border-t border-gray-100 dark:border-gray-800/80">
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-medium text-sm shadow-md shadow-blue-500/15"
          >
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
            Live Demo
          </motion.a>

          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-sm"
          >
            <FaGithub className="w-4 h-4" />
            Code
          </motion.a>
        </div>
      </div>

      {/* Subtle hover border glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 border border-blue-500/30 rounded-2xl pointer-events-none transition-opacity duration-300"
      />
    </motion.div>
  );
};

export default ProjectCard;
