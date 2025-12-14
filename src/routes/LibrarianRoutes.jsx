import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import Spinner from "../components/Spinner";

const LibrarianRoutes = ({ children }) => {
  const { loading } = useAuth();
  const { role } = useRole();
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (role !== "librarian") {
    return <Spinner></Spinner>;
  }
  return children;
};

export default LibrarianRoutes;
