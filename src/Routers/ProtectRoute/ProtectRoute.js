import React from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  if (token) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default ProtectRoute;
