// Form validation utilities
export const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
  
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
  
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
  
    if (!formData.date) {
      errors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      if (selectedDate < today) {
        errors.date = 'Date cannot be in the past';
      }
    }
  
    if (!formData.destination.trim()) {
      errors.destination = 'Destination is required';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
  
  // Form height calculation utility
  export const calculateFormHeight = (formRef) => {
    if (formRef.current) {
      const windowHeight = window.innerHeight;
      const maxHeight = windowHeight * 0.55;
      formRef.current.style.maxHeight = `${maxHeight}px`;
    }
  };