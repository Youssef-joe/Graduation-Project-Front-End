"use client";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/Login"); // Redirect if no token
        return;
      }

      try {
        const res = await axios.get("http://localhost:4000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(
          error.response?.data.message || "Error fetching user data"
        );
        router.push("/Login"); // Redirect on error
      }
    };

    fetchData();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <Fragment>
      <div className="flex text-center justify-center flex-col bg-gray-200 p-5">
        <h1 className="font-bold text-2xl font-marienda p-4">Profile</h1>
        {userData ? (
            <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-900">User Profile</h1>
                <div>
                  <a href="/home" className="mr-6">Home</a>
                  <a href="/settings" className="mr-6">Settings</a>
                  <a href="/logout">Logout</a>
                </div>
              </div>
            </header>
      
            {/* Profile Info */}
            <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Information</h3>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Full name</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.username}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Email address</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.userEmail}</dd>
                    </div>
                    {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Phone</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.phone}</dd>
                    </div> */}
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Role</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.role}</dd>
                    </div>
                  </dl>
                </div>
              </div>
      
              {/* Recent Activity Section */}
              <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
                </div>
                <div className="border-t border-gray-200">
                  {/* Display recent user activities in a grid or list */}
                  {/* <ul className="divide-y divide-gray-200">
                    {user.activities.map((activity, idx) => (
                      <li key={idx} className="px-4 py-4 sm:px-6">
                        <div className="text-sm text-gray-900">{activity.description}</div>
                        <div className="text-sm text-gray-500">{activity.date}</div>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No user data found</p>
        )}
      </div>
    </Fragment>
  );
}
