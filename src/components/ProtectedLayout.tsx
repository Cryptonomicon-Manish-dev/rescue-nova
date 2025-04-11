import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import AppFooter from "./AppFooter";

// Mock auth state - replace with your actual auth logic
const isAuthenticated = true; // This should come from your auth context/store

export const ProtectedLayout = () => {
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default ProtectedLayout;