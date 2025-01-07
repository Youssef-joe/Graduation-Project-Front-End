// ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+
import { fetchUser } from "../utils/auth.js"; // Ensure this is correctly implemented

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const userData = await fetchUser(); // Fetch user data
        setUser(userData); // Set user data
      } catch (error) {
        console.error("Authentication error:", error);
        router.push("/Login"); // Redirect to login if authentication fails
      } finally {
        setLoading(false); // Stop loading
      }
    };
    verifyUser();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner
  }

  if (!user) {
    return null; // Prevent rendering children if user is not authenticated
  }

  return children; // Render children if user is authenticated
};

export default ProtectedRoute;