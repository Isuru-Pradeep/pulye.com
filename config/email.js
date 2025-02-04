import emailjs from "@emailjs/browser";

// Initialize EmailJS with public key
export const initEmailService = () => {
  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
};

// Rate limiting implementation
const emailRateLimit = new Map();
const RATE_LIMIT_DURATION = 60000; // 1 minute in milliseconds

export const sendSecureEmail = async (formData) => {
  const userIdentifier = formData.email.toLowerCase();
  const now = Date.now();
  const lastAttempt = emailRateLimit.get(userIdentifier) || 0;

  if (now - lastAttempt < RATE_LIMIT_DURATION) {
    throw new Error("Please wait a minute before sending another message");
  }

  emailRateLimit.set(userIdentifier, now);

  // Clean up old rate limit entries
  for (const [key, timestamp] of emailRateLimit.entries()) {
    if (now - timestamp > RATE_LIMIT_DURATION) {
      emailRateLimit.delete(key);
    }
  }

  const sanitizedData = {
    from_name: formData.name.trim().slice(0, 100),
    from_email: formData.email.trim().toLowerCase().slice(0, 100),
    message: formData.message.trim().slice(0, 1000),
  };

  try {
    const response = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      sanitizedData
    );

    return response;
  } catch (error) {
    console.error("Email service error:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
};
