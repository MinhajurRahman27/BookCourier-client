import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const LibrarianRoutes = ({ children }) => {
  const { loading, signOutUser } = useAuth();
  const { role } = useRole();
  if (loading) {
    return <span class="loading loading-spinner loading-sm"></span>;
  }

  if (role !== "librarian") {
    return <span class="loading loading-spinner loading-sm"></span>;
  }
  return children;
};

export default LibrarianRoutes;
