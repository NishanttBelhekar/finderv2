import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust the path as needed

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Redirect them to the login page if not logged in
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
