"use client";
import React, { Fragment, useState } from "react";
import "../../../styles/globals.css";
import { loginUser } from "../../utils/auth";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  // Changed "login" to "Login"

  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/login",
        formData
      );
      localStorage.setItem("token", res.data.token); // Store the token in localStorage
      router.push("/Profile"); // Redirect to the profile page
    } catch (error) {
      console.error(error.message ? error.meessage : error);
    }
  };

  return (
    <Fragment>
      <section className="bg-gray-50 dark:bg--200">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border--700 shadow-xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text--900 md:text-2xl dark:text-black">
                Login With Your Account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit} // Make sure to use handleLogin here
              >
                <div>
                  <label
                    htmlFor="email" // Corrected "for" to "htmlFor"
                    className="block mb-2 text-sm font-medium text-gray-200 dark:text-black">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    onChange={handleChange}
                    required
                    // value={userEmail} // Ensure this matches the state
                    // Update this
                  />
                </div>
                <div>
                  <label
                    htmlFor="password" // Corrected "for" to "htmlFor"
                    className="block mb-2 text-sm font-medium text-gray-200 dark:text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    // value={userPass} // Ensure this matches the state
                    onChange={handleChange} // Update this
                  />
                </div>
                {/* Add any other form fields you need here */}
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
