import { apiRequest } from "./api";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export const registerUser = async (userData) => {
  try {
    return await apiRequest(`${BASE_URL}/api/register`, "POST", userData);
  } catch (error) {
    console.error("Registration error:", error);
    throw new Error("Registration failed. Please try again.");
  }
};

export const loginUser = async (userData) => {
  try {
    return await apiRequest(`${BASE_URL}/api/login`, "POST", userData);
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed. Please check your credentials.");
  }
};
