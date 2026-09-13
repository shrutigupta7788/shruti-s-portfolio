import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, 
  FaCheck, 
  FaExclamationTriangle, 
  FaEnvelope, 
  FaInfoCircle 
} from "react-icons/fa";
import { sendContactMessage, isEmailJsConfigured } from "./contactService";

const ContactForm = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'fallback' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const configured = isEmailJsConfigured();

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
    setErrorMessage("");

    // If EmailJS credentials are not configured yet, fallback smoothly to mailto
    if (!configured) {
      const mailtoUrl = `mailto:guptashruti7788@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.user_name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.user_name} (${formData.user_email})\n\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitStatus("fallback");
      setIsSubmitting(false);
      return;
    }

    try {
      await sendContactMessage({
        name: formData.user_name,
        email: formData.user_email,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitStatus("success");
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error("EmailJS transmission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error?.text || error?.message || "Failed to dispatch message via EmailJS."
      );
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

        <div className="flex items-center gap-2">
          {configured ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              EmailJS Connected
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Mail Client Fallback
            </span>
          )}
        </div>
      </div>

      {/* Feedback Messages */}
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-mono flex items-start gap-3"
          >
            <FaCheck className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div>
              <p className="font-semibold">Message Dispatched Successfully!</p>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-500 mt-0.5">
                Your transmission has been delivered directly to Shruti's inbox. Expect a response within 24 hours.
              </p>
            </div>
          </motion.div>
        )}

        {submitStatus === "fallback" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-300 text-xs font-mono flex items-start gap-3"
          >
            <FaEnvelope className="w-4 h-4 shrink-0 text-cyan-600 dark:text-cyan-400 mt-0.5" />
            <div>
              <p className="font-semibold">Opening Email Client</p>
              <p className="text-[11px] text-cyan-800 dark:text-cyan-400 mt-0.5">
                Opened your default email application with prefilled message details. To enable background browser transmission, add your EmailJS keys to <code className="px-1 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/60">.env</code>.
              </p>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-300 dark:border-rose-500/30 text-rose-800 dark:text-rose-400 text-xs font-mono space-y-2"
          >
            <div className="flex items-start gap-2.5">
              <FaExclamationTriangle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
              <div>
                <p className="font-semibold">Transmission Interrupted</p>
                <p className="text-[11px] text-rose-700 dark:text-rose-500 mt-0.5">
                  {errorMessage || "Unable to send through EmailJS. Please check your credentials or network."}
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-rose-200 dark:border-rose-800/40 text-[11px] flex items-center justify-between">
              <span>Send directly via email:</span>
              <a
                href="mailto:guptashruti7788@gmail.com"
                className="underline font-bold text-zinc-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                guptashruti7788@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            rows={5}
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

      {/* Helper Note */}
      {!configured && (
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
          <FaInfoCircle className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <span>
            Connect keys in <code className="text-zinc-700 dark:text-zinc-300 font-semibold">.env</code> to enable direct background dispatch.
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
