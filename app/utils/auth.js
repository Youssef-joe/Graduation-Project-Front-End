// utils/auth.js
import axios from "axios";

export const fetchUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found.");
  }

  try {
    const response = await axios.get("/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.user;
  } catch (error) {
    throw new Error("Failed to fetch user data.");
  }
};