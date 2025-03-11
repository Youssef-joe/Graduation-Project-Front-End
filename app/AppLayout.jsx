"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookSquare, FaGithub, FaInstagram, FaTwitter, FaUserCircle } from "react-icons/fa";
import { BsTelephone, BsArrowUpCircle } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { useAuth } from "./context/AuthContext";

const AppLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}>
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <IoRestaurantOutline className={`h-8 w-8 ${scrolled ? 'text-red-500' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Bistro Bliss
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Link
                  href={link.href}
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-gray-800 hover:text-red-500' : 'text-white hover:text-red-300'
                  }`}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            {!user ? (
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full ${
                    scrolled
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white text-red-500 hover:bg-red-50'
                  }`}>
                  <Link href="/Login">Login</Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                  <Link href="/Register">Register</Link>
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative group">
                  <Link href="/Profile" className="flex items-center gap-2">
                    <FaUserCircle className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
                    <span className={scrolled ? 'text-gray-800' : 'text-white'}>Profile</span>
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={logout}
                  className={`px-4 py-2 rounded-full ${
                    scrolled
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white text-red-500 hover:bg-red-50'
                  }`}>
                  Logout
                </motion.button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-2xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            {isMenuOpen ? '×' : '☰'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/90 backdrop-blur-md md:hidden">
              <nav className="container mx-auto py-4">
                <ul className="flex flex-col items-center gap-4">
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      <Link href={link.href} className="text-gray-800 hover:text-red-500">
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                  {!user ? (
                    <>
                      <motion.li whileHover={{ scale: 1.05 }}>
                        <Link href="/Login" className="text-gray-800 hover:text-red-500">
                          Login
                        </Link>
                      </motion.li>
                      <motion.li whileHover={{ scale: 1.05 }}>
                        <Link href="/Register" className="text-gray-800 hover:text-red-500">
                          Register
                        </Link>
                      </motion.li>
                    </>
                  ) : (
                    <>
                      <motion.li whileHover={{ scale: 1.05 }}>
                        <Link href="/Profile" className="text-gray-800 hover:text-red-500">
                          Profile
                        </Link>
                      </motion.li>
                      <motion.li whileHover={{ scale: 1.05 }}>
                        <button
                          onClick={logout}
                          className="text-gray-800 hover:text-red-500">
                          Logout
                        </button>
                      </motion.li>
                    </>
                  )}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto py-24 px-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}>
                <IoRestaurantOutline className="h-8 w-8 text-red-500" />
                <span className="text-2xl font-bold">Bistro Bliss</span>
              </motion.div>
              <p className="text-gray-400">
                Experience the perfect blend of taste and ambiance at Bistro Bliss.
                Your journey to culinary excellence starts here.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                  className="text-gray-400 hover:text-white">
                  <FaTwitter className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#4267B2" }}
                  className="text-gray-400 hover:text-white">
                  <FaFacebookSquare className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#E1306C" }}
                  className="text-gray-400 hover:text-white">
                  <FaInstagram className="h-6 w-6" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors">
                    <Link href={link.href}>{link.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <ul className="space-y-2">
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-400">
                  <BsTelephone />
                  <span>+1 234 567 890</span>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-400">
                  <MdOutlineEmail />
                  <span>contact@bistrobliss.com</span>
                </motion.li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bistro Bliss. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors">
            <BsArrowUpCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppLayout;