// ProtectedRoutes.js
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log("Is authenticated:", isAuthenticated); // Log authentication state

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
