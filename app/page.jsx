"use client";
import React from "react";
import { AuthProvider } from "./context/AuthContext.js"; // Update the path accordingly
import { GiCoffeeCup } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinks2Line } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import { FaClock } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Home from './Home/Page.jsx'
import "./../styles/globals.css";

const Page = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider> // Wrap the entire page with AuthProvider
  );
};

export default Page;
