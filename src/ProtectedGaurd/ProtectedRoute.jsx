import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  function hasJWT() {
    let flag = false;

    // check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }

  return hasJWT() ? children : <Navigate to="/36tens/authentication/login" />;
};

export default ProtectedRoute;
