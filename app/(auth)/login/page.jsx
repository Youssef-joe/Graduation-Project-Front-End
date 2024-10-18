"use client";
import React, { Fragment, useState } from "react";
import "../../../styles/globals.css";
import { loginUser } from "../../utils/auth";
import { useRouter } from "next/navigation";


const Login = () => {
  // Changed "login" to "Login"
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const router = useRouter();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting to log in with:", {
        email: userEmail,
        password: userPass,
      });
      const data = await loginUser({ email: userEmail, password: userPass });
      console.log("Login successful: ", data);
     
      router.push("/Profile");
    } catch (er) {
      console.log("Login error: ", er.message ? er.message : er);
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
                onSubmit={handleLogin} // Make sure to use handleLogin here
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
                    required
                    value={userEmail} // Ensure this matches the state
                    onChange={(e) => setUserEmail(e.target.value)} // Update this
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
                    value={userPass} // Ensure this matches the state
                    onChange={(e) => setUserPass(e.target.value)} // Update this
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

export default Login; // Exporting as Login
