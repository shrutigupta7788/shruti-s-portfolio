import React from "react";

const Test = () => {
  return (
    <div className="mt-16 text-center">
      <div className="bg-zinc-900 border border-zinc-800 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Work Together?
        </h3>
        <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
          Let's create something amazing together. I'm always excited to take on new challenges and bring ideas to life.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
        >
          Start a Project
        </a>
      </div>
    </div>
  );
};

export default Test;