import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Check whether EmailJS credentials are provided in the environment.
 */
export const isEmailJsConfigured = () => {
  return Boolean(
    SERVICE_ID &&
    TEMPLATE_ID &&
    PUBLIC_KEY &&
    SERVICE_ID !== "your_service_id_here" &&
    TEMPLATE_ID !== "your_template_id_here" &&
    PUBLIC_KEY !== "your_public_key_here"
  );
};

/**
 * Send an email message using EmailJS.
 * Compatible with common template variables (name / user_name / from_name, email / user_email / reply_to).
 */
export const sendContactMessage = async ({ name, email, subject, message }) => {
  if (!isEmailJsConfigured()) {
    throw new Error("EMAILJS_NOT_CONFIGURED");
  }

  const now = new Date();
  const formattedTime = now.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const templateParams = {
    name,
    user_name: name,
    from_name: name,
    email,
    user_email: email,
    reply_to: email,
    subject: subject || "Portfolio Dispatch",
    message,
    time: formattedTime,
    sent_at: now.toISOString(),
  };

  const response = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );

  return response;
};

export default {
  isEmailJsConfigured,
  sendContactMessage,
};
