"use client";
import React from "react";
import Home from "./Home/page.jsx";
import "./../styles/globals.css";

const Page = () => {
  return <Home />; // No need to wrap with AuthProvider here
};

export default Page;
