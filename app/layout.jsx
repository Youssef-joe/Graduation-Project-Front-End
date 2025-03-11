"use client"; // Add this directive if using Next.js 13+ App Router

import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import { CartProvider } from "./context/CartContext";
import Layout from "./AppLayout"; // Import your Layout component
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`${inter.className} h-full antialiased`}>
        <AuthProvider>
          <CartProvider>
            <AnimatePresence mode="wait">
              <main className="min-h-screen">
                <Layout>{children}</Layout>{" "}
                {/* Wrap Layout with AuthProvider */}
              </main>
            </AnimatePresence>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
