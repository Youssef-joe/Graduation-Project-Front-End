"use client";

import React, { useContext } from 'react';
import { AuthContext } from './../context/AuthContext.js'; // Adjust the path if necessary


const Profile = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user?.name || "User"}!</h1>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone || "No phone number available"}</p>
      {/* Add more user data as needed */}
    </div>
  );
};

export default Profile;
