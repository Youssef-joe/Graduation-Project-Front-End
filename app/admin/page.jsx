"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProtectedRoute from "../components/ProtectedRoute";
import api from "../utils/api";
import { pageTransition, fadeIn } from "../utils/animations";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for chart
  const chartData = Array.from({ length: 7 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 100) + 50,
  }));

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const { data } = await api.get("/users/admin", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setAdminData(data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAdminData();
  }, []);

  const statCards = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12.5%",
      color: "green",
      icon: "👥",
    },
    {
      title: "Active Sessions",
      value: "56",
      change: "+5.2%",
      color: "purple",
      icon: "🔵",
    },
    {
      title: "Total Revenue",
      value: "$12,345",
      change: "+8.7%",
      color: "orange",
      icon: "💰",
    },
  ];

  return (
    <ProtectedRoute>
      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        {...pageTransition}>
        <motion.div
          className="max-w-7xl mx-auto space-y-8"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}>
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg bg-opacity-90 border border-gray-100">
            <div className="px-6 py-8 sm:p-10">
              <div className="flex items-center justify-between border-b border-gray-200 pb-5">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Admin Dashboard
                  </h1>
                  <p className="mt-2 text-sm text-gray-500">
                    Welcome back! Here's your admin control panel
                  </p>
                </div>
                <motion.div
                  className="p-3 bg-blue-50 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <span className="text-2xl">👋</span>
                </motion.div>
              </div>

              {isLoading ? (
                <motion.div
                  className="flex justify-center items-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}>
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
                    <div className="w-16 h-16 border-4 border-transparent rounded-full animate-ping absolute inset-0 border-t-blue-300 opacity-30"></div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="mt-8 space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}>
                  {/* System Status */}
                  {adminData && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                        <span className="mr-2">📊</span> System Status
                      </h2>
                      <p className="text-blue-700">{adminData.message}</p>
                    </div>
                  )}

                  {/* Quick Stats Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {statCards.map((stat, index) => (
                      <motion.div
                        key={stat.title}
                        className={`bg-${stat.color}-50 rounded-xl p-6 border border-${stat.color}-100 relative overflow-hidden`}
                        whileHover={{ scale: 1.02, translateY: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        custom={index}>
                        <div className="absolute right-0 top-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-white to-transparent opacity-40 rounded-full"></div>
                        <div className="flex items-center justify-between">
                          <h3
                            className={`text-lg font-medium text-${stat.color}-900`}>
                            {stat.title}
                          </h3>
                          <span className="text-2xl">{stat.icon}</span>
                        </div>
                        <p
                          className={`text-3xl font-bold text-${stat.color}-600 mt-2`}>
                          {stat.value}
                        </p>
                        <div className="flex items-center mt-2">
                          <span
                            className={`text-sm font-medium text-${stat.color}-600`}>
                            {stat.change}
                          </span>
                          <span className="text-xs text-gray-500 ml-2">
                            vs last week
                          </span>
                        </div>

                        {/* Mini Chart */}
                        <div className="h-16 mt-4">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                              <Line
                                type="monotone"
                                dataKey="value"
                                stroke={`var(--${stat.color}-500)`}
                                strokeWidth={2}
                                dot={false}
                              />
                              <Tooltip
                                contentStyle={{
                                  background: "white",
                                  border: "none",
                                  borderRadius: "8px",
                                  boxShadow:
                                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Activity Feed */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Recent Activity
                    </h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center p-4 bg-gray-50 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}>
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                          <div>
                            <p className="text-sm text-gray-600">
                              New user registered
                            </p>
                            <p className="text-xs text-gray-400">
                              {i + 1} hour ago
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
