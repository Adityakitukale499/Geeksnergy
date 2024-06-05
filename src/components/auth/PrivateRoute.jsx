import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = localStorage.getItem("login") == "yes";
  return auth ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoute;
