// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RegisterAndLogin from "../pages/RegisterAndLogin";
// import Main from "../pages/Main";
// import Dashboard from "../pages/Dashboard";
// import { AuthProvider } from "../context/AuthContext";
// import { ProfileProvider } from "../context/ProfileContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProfileProvider } from "./context/ProfileContext";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";
import './App.css'

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegisterAndLogin />} />
            <Route path="/home" element={<Main />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
