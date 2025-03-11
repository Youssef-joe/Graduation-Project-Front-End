"use client";

import React, { useState, useEffect } from "react";
import "../../../styles/globals.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import api from "../../utils/api";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled,
}) => (
  <div>
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      disabled={disabled}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const Login = () => {
  const [formData, setFormData] = useState({ userEmail: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  useEffect(() => {
    // Check if user just registered
    if (searchParams.get("registered")) {
      setSuccess(
        "Registration successful! Please login with your credentials."
      );
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/api/login", formData);
      // Use the login function from AuthContext
      login(res.data.user, res.data.token);
      // Redirect to profile page
      router.push("/Profile");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <section className="bg-gray-50 dark:bg--200">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border--700 shadow-xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text--900 md:text-2xl dark:text-black">
                Login With Your Account
              </h1>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 text-green-700 rounded-lg">
                  {success}
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </motion.div>
              )}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <InputField
                  label="Your email"
                  type="email"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  error={error && error.includes("email") ? error : ""}
                  disabled={loading}
                />
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  error={error && error.includes("password") ? error : ""}
                  disabled={loading}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200">
                  {loading ? "Logging in..." : "Login"}
                </motion.button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="/Register"
                    className="font-medium text-red-600 hover:underline">
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
