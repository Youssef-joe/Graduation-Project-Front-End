import { apiRequest } from "./api";

export const registerUser = async (userData) => {
  return await apiRequest(
    "http://localhost:3000/api/register",
    "POST",
    userData
  );
};

export const loginUser = async (userData) => {
  return await apiRequest("http://localhost:3000/api/login", "POST", userData);
};
