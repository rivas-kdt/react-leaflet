import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router";
import { AuthProvider } from "../lib/auth";

const Layout = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <div className=" min-h-[calc(100vh-60px)]">
          <Outlet />
        </div>
      </AuthProvider>
    </div>
  );
};

export default Layout;
