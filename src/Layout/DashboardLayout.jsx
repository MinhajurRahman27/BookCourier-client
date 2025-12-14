import React, { useState } from "react";
import { FaBook, FaFileInvoiceDollar, FaUsers } from "react-icons/fa";

import { Link, NavLink, Outlet } from "react-router";
import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";
import Theme from "../darklightmode/theme";
import { GrBook } from "react-icons/gr";
import { FiMenu, FiX } from "react-icons/fi";
import { LuListCollapse } from "react-icons/lu";
import { TbHomeFilled } from "react-icons/tb";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdLibraryAdd } from "react-icons/md";
import Spinner from "../components/Spinner";

const DashboardLayout = () => {
  const { role, roleLoading } = useRole();
  const { loading, user, signOutUser } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (roleLoading) {
    return <Spinner></Spinner>;
  }

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleSignOut = () => {
    signOutUser().then(() => {
      // console.log("signout successful");
    });
  };

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <div
        className={`bg-base-200 transition-all duration-300 flex flex-col ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Sidebar Header with Logo */}
        <div className="p-4 border-b border-base-300 flex items-center justify-between">
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <GrBook className="text-3xl text-orange-500 flex-shrink-0" />
              {isSidebarOpen && (
                <span className="text-xl font-semibold">BookCourier</span>
              )}
            </div>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-ghost btn-sm"
          >
            {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="menu flex-1 p-2 overflow-y-auto ">
          {/* Home */}
          <li>
            <NavLink to={"/dashboard"} data-tip="Home">
              <TbHomeFilled className="text-orange-500 text-2xl" />
              {isSidebarOpen && <span>Home</span>}
            </NavLink>
          </li>

          {/* User Role Links */}
          {role === "user" && (
            <>
              <li>
                <NavLink to="/dashboard/mywhishlist" data-tip="My Wishlist">
                  <LuListCollapse className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>My Wishlist</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myorders" data-tip="My Orders">
                  <RiShoppingBag2Fill className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>My Orders</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myprofile" data-tip="My Profile">
                  <CgProfile className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>My Profile</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/invoice" data-tip="Invoice">
                  <FaFileInvoiceDollar className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>Invoice</span>}
                </NavLink>
              </li>
            </>
          )}

          {/* Librarian Role Links */}
          {role === "librarian" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/addbook"
                  className={`${!isSidebarOpen ? "tooltip tooltip-right" : ""}`}
                  data-tip="Add Book"
                >
                  <MdLibraryAdd className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>Add Book</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/mybooks"
                  className={`${!isSidebarOpen ? "tooltip tooltip-right" : ""}`}
                  data-tip="My Books"
                >
                  <FaBook className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>My Books</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/orders"
                  className={`${!isSidebarOpen ? "tooltip tooltip-right" : ""}`}
                  data-tip="Orders"
                >
                  <RiShoppingBag2Fill className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>Orders</span>}
                </NavLink>
              </li>
            </>
          )}

          {/* Admin Role Links */}
          {role === "admin" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className={`${!isSidebarOpen ? "tooltip tooltip-right" : ""}`}
                  data-tip="All Users"
                >
                  <FaUsers className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>All Users</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/managebooks"
                  className={`${!isSidebarOpen ? "tooltip tooltip-right" : ""}`}
                  data-tip="Manage Books"
                >
                  <FaBook className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>Manage Books</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myprofile"
                  className={`${!isSidebarOpen ? "tooltip tooltip-right" : ""}`}
                  data-tip="My Profile"
                >
                  <CgProfile className="text-orange-500 text-2xl" />
                  {isSidebarOpen && <span>My Profile</span>}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
       


        <div className="flex-1 overflow-y-auto p-4 bg-base-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
