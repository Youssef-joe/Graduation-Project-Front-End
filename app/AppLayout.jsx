"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { useAuth } from "./context/AuthContext"; // Import useAuth

const AppLayout = ({ children }) => {
  const { user, logout } = useAuth(); // Use global auth state
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <IoRestaurantOutline className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold">Bistro Bliss</span>
          </div>

          {/* Links */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-red-400">
              Home
            </Link>
            <Link href="/menu" className="hover:text-red-400">
              Menu
            </Link>
            <Link href="/about" className="hover:text-red-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-red-400">
              Contact
            </Link>
            {!user ? (
              <>
                <Link href="/Register" className="hover:text-red-400">
                  Register
                </Link>
                <Link href="/Login" className="hover:text-red-400">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link href="/Profile" className="hover:text-red-400">
                  Profile
                </Link>
                <button onClick={logout} className="hover:text-red-400">
                  Logout
                </button>
              </>
            )}
          </nav>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-xl">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-gray-700 md:hidden">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <Link href="/" className="hover:text-red-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-red-400">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400">
                  Contact
                </Link>
              </li>
              {!user ? (
                <>
                  <li>
                    <Link href="/Register" className="hover:text-red-400">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link href="/Login" className="hover:text-red-400">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/Profile" className="hover:text-red-400">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={logout} className="hover:text-red-400">
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-2">Bistro Bliss</h3>
            <p>
              Join us for a dining experience that's filled with flavors and joy.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="hover:text-red-400">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-red-400">
                <Link href="/menu">Menu</Link>
              </li>
              <li className="hover:text-red-400">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-red-400">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <FaFacebookSquare className="text-2xl cursor-pointer hover:text-red-400" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-red-400" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-red-400" />
              <FaGithub className="text-2xl cursor-pointer hover:text-red-400" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AppLayout;