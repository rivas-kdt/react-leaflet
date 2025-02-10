import React from "react";
import { useAuth } from "../lib/auth";
import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const { user, loading } = useAuth();
  if (!user && !loading) {
    return <Outlet />;
  }
  if (!loading && user) {
    return <Navigate to={"/"} />;
  }
};

export default AuthRoute;
