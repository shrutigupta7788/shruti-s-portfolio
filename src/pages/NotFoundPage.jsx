import React from "react";
import { Link } from "react-router-dom";
import { FaTerminal, FaHome, FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-32">
      <div className="max-w-lg w-full rounded-2xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800 p-8 shadow-2xl shadow-black/5 dark:shadow-black/80 font-mono text-center">
        <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-rose-500 dark:text-rose-400 mx-auto mb-6">
          <FaTerminal className="w-6 h-6" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20 mb-3">
          ERROR 404: NOT_FOUND
        </span>

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          Route Not Found
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8">
          The requested URL path does not exist in this portfolio application. The route might have been moved or removed.
        </p>

        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-zinc-800/80 text-left text-xs text-zinc-600 dark:text-zinc-400 mb-8 space-y-1">
          <p className="text-zinc-400 dark:text-zinc-500">$ router.resolve(location.pathname)</p>
          <p className="text-rose-600 dark:text-rose-400 font-medium">&gt; Status: 404 (Route not registered)</p>
          <p className="text-cyan-700 dark:text-cyan-400">&gt; Action: return to root path ('/')</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-zinc-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-zinc-200 transition-all shadow-md"
          >
            <FaHome className="w-3.5 h-3.5" />
            <span>Return to ~/home</span>
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-zinc-800 dark:text-zinc-300 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 transition-all"
          >
            <FaArrowLeft className="w-3 h-3" />
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
