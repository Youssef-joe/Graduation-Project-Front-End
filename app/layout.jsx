"use client"; // Add this directive if using Next.js 13+ App Router

import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import Layout from "./AppLayout"; // Import your Layout component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Layout>{children}</Layout> {/* Wrap Layout with AuthProvider */}
        </AuthProvider>
      </body>
    </html>
  );
}