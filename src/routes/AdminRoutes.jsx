import React from "react";
import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";
import Spinner from "../components/Spinner";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { role } = useRole();
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!user) {
    return <Spinner></Spinner>;
  }

  if (role !== "admin") {
    return <Spinner></Spinner>;
  }
  return children;
};

export default AdminRoutes;
