import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck, FaExclamationTriangle, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      if (serviceId === "YOUR_SERVICE_ID" || !serviceId) {
        const mailtoUrl = `mailto:guptashruti7788@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Portfolio Inquiry from " + formData.user_name
        )}&body=${encodeURIComponent(
          `From: ${formData.user_name} (${formData.user_email})\n\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setSubmitStatus("fallback");
        return;
      }

      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setSubmitStatus("success");
      form.current.reset();
      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 shadow-lg dark:shadow-xl dark:shadow-black/40">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
            Transmit Message
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
            // direct_inbox_dispatch
          </p>
        </div>

        <span className="font-mono text-[11px] text-zinc-500">
          latency: &lt; 24h
        </span>
      </div>

      {/* Feedback Messages */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono flex items-center gap-3"
        >
          <FaCheck className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span>Success: Message transmitted to Shruti's inbox!</span>
        </motion.div>
      )}

      {submitStatus === "fallback" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono flex items-center gap-3"
        >
          <FaEnvelope className="w-4 h-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
          <span>Opened your default email client to send this message.</span>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-300 dark:border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs font-mono flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2">
            <FaExclamationTriangle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
            <span>Unable to transmit. Send directly via email:</span>
          </div>
          <a
            href="mailto:guptashruti7788@gmail.com"
            className="underline font-bold text-zinc-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300"
          >
            guptashruti7788@gmail.com
          </a>
        </motion.div>
      )}

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="user_name"
              className="block font-mono text-[11px] text-zinc-600 dark:text-zinc-400 mb-1.5"
            >
              $ sender.name <span className="text-rose-500 dark:text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 shadow-xs transition-all font-mono"
              placeholder="e.g. Alex Rivera"
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="block font-mono text-[11px] text-zinc-600 dark:text-zinc-400 mb-1.5"
            >
              $ sender.email <span className="text-rose-500 dark:text-rose-400">*</span>
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 shadow-xs transition-all font-mono"
              placeholder="alex@company.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block font-mono text-[11px] text-zinc-600 dark:text-zinc-400 mb-1.5"
          >
            $ message.subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 shadow-xs transition-all font-mono"
            placeholder="Frontend role / project inquiry"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-mono text-[11px] text-zinc-600 dark:text-zinc-400 mb-1.5"
          >
            $ message.payload <span className="text-rose-500 dark:text-rose-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 shadow-xs transition-all font-mono resize-none"
            placeholder="Tell me about your role, timeline, or engineering challenge..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-mono text-xs font-semibold text-white bg-zinc-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-black/5 active:scale-98 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <FaPaperPlane className="w-3.5 h-3.5" />
              <span>Execute Dispatch // Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
