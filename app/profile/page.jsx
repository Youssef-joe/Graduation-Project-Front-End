// pages/Profile.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../utils/protectedRoutes.js";
import api from "../utils/api.js";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch user data from API
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/Login");
      return;
    }

    try {
      const { data } = await api.get("/api/profile"); // Use the correct base URL
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to fetch profile data. Redirecting to login...");
      router.push("/Login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [router]);

  // Loading state
  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  // Error state
  if (error) {
    return <p>{error}</p>;
  }

  // Redirect to login if user is not authenticated
  if (!user) {
    return null; // Prevent rendering anything if user is not authenticated
  }

  // Protected Route
  return (
    <ProtectedRoute>
      <div className="profile">
        <h1>Welcome, {user.username}</h1>
        <p>Email: {user.userEmail}</p>
        <p>Role: {user.role}</p>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;