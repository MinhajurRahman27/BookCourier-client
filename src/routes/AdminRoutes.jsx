import React from "react";
import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({ children }) => {
  const { user, loading, signOutUser } = useAuth();
  const { role } = useRole();
  if (loading) {
    return <span class="loading loading-spinner loading-sm"></span>;
  }

  if (!user) {
    return <span className="loading loading-spinner loading-sm"></span>;
  }

  if (role !== "admin") {
    return <span className="loading loading-spinner loading-sm"></span>;
  }
  return children;
};

export default AdminRoutes;
