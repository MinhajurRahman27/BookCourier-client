import React from "react";
import useAuth from "../../Hooks/useAuth";

const ManageBook = () => {
  const { loading } = useAuth();
  if (loading) {
    return <span className="loading loading-spinner loading-sm"></span>;
  }
  return <div>manage books</div>;
};

export default ManageBook;
