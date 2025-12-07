import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link, Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span class="loading loading-spinner loading-sm"></span>;
  }

  if (!user) {
    return (
      <Navigate state={location.pathname} to="/login">
        Login
      </Navigate>
    );
  }

  return children;
};

export default PrivateRoutes;
