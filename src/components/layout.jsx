import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className=" min-h-[calc(100vh-60px)]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
