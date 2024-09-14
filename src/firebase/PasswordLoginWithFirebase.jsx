import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterAndLogin from "../pages/RegisterAndLogin";
import Main from "../pages/Main";
import Dashboard from "../pages/Dashboard";
import { AuthProvider } from "../context/AuthContext"; // Adjust the path as needed
import ProtectedRoute from "../context/ProtectedRoutes"; // Adjust the path as needed

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterAndLogin />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Main />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
