import React from "react";
import useRole from "../Hooks/useRole";
import UserDashBoard from "./UserDashBoard";
import AdminDashboard from "./AdminDashboard";
import LibrarianDashboard from "./LibrarianDashboard";
import { Link } from "react-router";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  if (role === "user") {
    return <UserDashBoard></UserDashBoard>;
  }

  if (role === "admin") {
    return <AdminDashboard></AdminDashboard>;
  }
  if (role === "librarian") {
    return <LibrarianDashboard></LibrarianDashboard>;
  }
  return <Link to={"/login"}></Link>;
};

export default DashboardHome;
