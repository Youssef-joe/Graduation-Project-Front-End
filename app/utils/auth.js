// utils/auth.js
import axios from "axios";

export const fetchUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found.");
  }

  try {
    const response = await axios.get("http://localhost:4000/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.user;
  } catch (error) {
    throw new Error("Failed to fetch user data.");
  }
};
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/api/register`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed.");
  }
};