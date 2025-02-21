import emailjs from 'emailjs-com';

export const sendBookingEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    );
    return {
      success: true,
      message: "Email sent successfully!",
      response
    };
  } catch (error) {
    console.error("Email service error:", error);
    return {
      success: false,
      message: "Failed to send email",
      error
    };
  }
};