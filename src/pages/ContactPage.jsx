import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaCopy, 
  FaCheck, 
  FaTerminal, 
  FaArrowRight,
  FaQuestionCircle
} from "react-icons/fa";
import ContactForm from "../features/contact/ContactForm";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const email = "guptashruti7788@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const faqs = [
    {
      q: "Are you available for full-time engineering roles?",
      a: "Yes, I am actively seeking full-time Frontend Developer and Full-Stack Engineer opportunities (remote or based in Mumbai, India)."
    },
    {
      q: "What is your typical turnaround time for email messages?",
      a: "I reply within 24 hours to all relevant inquiries, technical project briefs, and recruiter messages."
    },
    {
      q: "Do you take freelance or contract projects?",
      a: "Yes! If you have a web application, portfolio, dashboard, or client site that needs engineering, feel free to submit the form."
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
      {/* Page Header with Breadcrumb */}
      <div className="border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-3">
          <Link to="/" className="hover:text-zinc-800 dark:hover:text-zinc-300">~/home</Link>
          <span>/</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">contact</span>
        </div>

        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
          <span>// 04. DIRECT DISPATCH</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Initiate Communication
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
          Whether you have an engineering opening, a freelance project inquiry, or just want to discuss modern React and web development.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Terminal info, direct links, and FAQ */}
        <div className="lg:col-span-5 space-y-6">
          {/* Terminal Query Output */}
          <div className="rounded-2xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800/80 p-5 font-mono text-xs shadow-lg dark:shadow-xl dark:shadow-black/40">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-200 dark:border-zinc-800/80 text-zinc-500">
              <FaTerminal className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              <span>endpoint: /api/shruti/status</span>
            </div>

            <div className="space-y-1 text-zinc-700 dark:text-zinc-300">
              <p className="text-zinc-400 dark:text-zinc-500">// Terminal Query</p>
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold">$ curl -s https://shruti.dev/status</p>
              <div className="pt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>&#123;</p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">"status"</span>:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">"Available for Hire"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">"location"</span>:{" "}
                  <span className="text-zinc-800 dark:text-zinc-200">"Mumbai, Maharashtra, India"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">"timezone"</span>:{" "}
                  <span className="text-zinc-800 dark:text-zinc-200">"IST (UTC+5:30)"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">"roles"</span>: [
                </p>
                <p className="pl-8 text-cyan-700 dark:text-cyan-300">
                  "Frontend Developer", "Full-Stack Engineer"
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">"replyTime"</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-400">"&lt; 24h"</span>
                </p>
                <p>&#125;</p>
              </div>
            </div>
          </div>

          {/* Direct Email Card */}
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between gap-4 shadow-sm">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                <FaEnvelope className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                  Direct Email
                </p>
                <a
                  href="mailto:guptashruti7788@gmail.com"
                  className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors truncate block"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800/60">
              <button
                onClick={copyEmail}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-mono text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <FaCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=guptashruti7788@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-mono text-xs text-cyan-700 dark:text-cyan-300 bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-950/40 dark:hover:bg-cyan-900/40 border border-cyan-200 dark:border-cyan-800/50 transition-all"
              >
                <span>Open Gmail</span>
                <FaArrowRight className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
            <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
              Professional Profiles
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/shrutigupta7788"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all font-mono text-xs"
              >
                <FaGithub className="w-4 h-4 text-zinc-900 dark:text-white" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shruti-gupta-169178305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all font-mono text-xs"
              >
                <FaLinkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Transmission Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Frequently Asked Inquiries (FAQ) */}
      <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
          <span>// 04.2 FREQUENTLY ASKED INQUIRIES</span>
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
          Common Questions &amp; Availability
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between shadow-sm"
            >
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2 tracking-tight flex items-start gap-2">
                  <FaQuestionCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item.q}</span>
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
