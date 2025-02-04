export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!email) {
  //   return 'Email is required';
  // }
  if (!emailRegex.test(email) && email) {
    return "Please enter a valid email address";
  }
  return "";
};

export const validateName = (name) => {
  if (!name) {
    return "Name is required";
  }
  if (name.length < 2) {
    return "Name must be at least 2 characters long";
  }
  if (name.length > 100) {
    return "Name must be less than 100 characters";
  }
  return "";
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s-]{8,}$/;
  if (!phone) {
    return "Phone number is required";
  }
  if (!phoneRegex.test(phone)) {
    return "Please enter a valid phone number";
  }
  return "";
};

export const validateMessage = (message) => {
  if (!message) {
    return "Message is required";
  }
  if (message.length < 10) {
    return "Message must be at least 10 characters long";
  }
  if (message.length > 1000) {
    return "Message must be less than 1000 characters";
  }
  return "";
};
