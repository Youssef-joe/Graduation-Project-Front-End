import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; // Import useAuth

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Use global auth state
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner
  }

  if (!user) {
    router.push("/Login"); // Redirect to login if user is not authenticated
    return null;
  }

  return children; // Render children if user is authenticated
};

export default ProtectedRoute;