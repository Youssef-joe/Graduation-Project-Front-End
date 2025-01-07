// utils/validation.js
export const validateRegisterForm = (formData) => {
    const { name, email, password, confirmPassword } = formData;
  
    if (!name.trim()) {
      return "Name is required.";
    }
  
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return "Please enter a valid email address.";
    }
  
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
  
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
  
    return null; // No errors
  };