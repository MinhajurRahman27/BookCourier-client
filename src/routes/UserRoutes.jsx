import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const UserRoutes = ({ children }) => {
  const { loading, signOutUser } = useAuth();
  const { role } = useRole();
  if (loading) {
    return <span class="loading loading-spinner loading-sm"></span>;
  }

  if (role !== "user") {
    return signOutUser();
  }
  return children;
};

export default UserRoutes;
