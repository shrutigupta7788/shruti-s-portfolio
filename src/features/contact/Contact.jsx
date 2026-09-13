import React, { useState } from "react";
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaCopy, 
  FaCheck,
  FaTerminal,
  FaArrowRight
} from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "guptashruti7788@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090a0f] border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
            <span>// 04.</span>
            <span className="uppercase tracking-wider">Contact & Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Initiate Communication
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            Currently open to full-time engineering roles, frontend contracts, and collaborative development opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Developer Hub & Terminal Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Terminal Status Card */}
            <div className="rounded-2xl bg-[#0d0f17] border border-zinc-800/80 p-5 shadow-xl shadow-black/40 font-mono text-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-800/80 text-zinc-500">
                <FaTerminal className="w-3 h-3 text-cyan-400" />
                <span>endpoint: /api/shruti/status</span>
              </div>

              <div className="space-y-1.5 leading-relaxed text-zinc-300">
                <p className="text-zinc-500">// Terminal Query</p>
                <p className="text-cyan-400">$ curl -s https://shruti.dev/status</p>
                <div className="pt-2 text-zinc-400">
                  <p>&#123;</p>
                  <p className="pl-4">
                    <span className="text-purple-400">"availability"</span>:{" "}
                    <span className="text-emerald-400">"Open for Engineering Roles"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">"location"</span>:{" "}
                    <span className="text-zinc-200">"Mumbai, Maharashtra, India"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">"timezone"</span>:{" "}
                    <span className="text-zinc-200">"IST (UTC+5:30)"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">"preferredRoles"</span>: [
                  </p>
                  <p className="pl-8 text-cyan-300">
                    "Frontend Developer", "React Specialist", "Full-Stack Dev"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-purple-400">"responseLatency"</span>:{" "}
                    <span className="text-amber-400">"&lt; 24 hours"</span>
                  </p>
                  <p>&#125;</p>
                </div>
              </div>
            </div>

            {/* Direct Email Card with Copy Trigger */}
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                    Direct Email
                  </p>
                  <a
                    href="mailto:guptashruti7788@gmail.com"
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex gap-2 pt-2 border-t border-zinc-800/60">
                <button
                  onClick={copyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-mono text-xs text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all"
                >
                  {copied ? (
                    <>
                      <FaCheck className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="w-3 h-3 text-zinc-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=guptashruti7788@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-mono text-xs text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-800/50 transition-all"
                >
                  <span>Open Gmail</span>
                  <FaArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
              <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
                Social Profiles & Activity
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/shrutigupta7788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all font-mono text-xs"
                >
                  <FaGithub className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shruti-gupta-169178305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all font-mono text-xs"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
