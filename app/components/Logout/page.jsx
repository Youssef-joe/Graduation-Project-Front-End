"use client";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  let handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/Login");
  };
  return (
    <Fragment>
      <button
        onClick={handleLogout}
        className="bg-black text-white m-5 p-5 font-bold">
        Logout
      </button>
    </Fragment>
  );
};

export default Logout;
