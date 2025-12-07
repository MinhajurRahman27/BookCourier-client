import React from "react";
import { FaJediOrder } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { NavLink, Outlet } from "react-router";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const { role } = useRole();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">Dashboard</div>
          </nav>
          <Outlet></Outlet>
          <div className="p-4">Page Content</div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <NavLink
                  to={"/"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Home"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Home</span>
                </NavLink>
              </li>
              {/* List item */}

              {role === "user" && (
                <>
                  {" "}
                  <li>
                    <NavLink
                      to="/dashboard/myorders"
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="My Orders"
                    >
                      {/* Settings icon */}
                      <FaJediOrder></FaJediOrder>

                      <span className="is-drawer-close:hidden">My Orders</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myprofile"
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="My Profile"
                    >
                      {/* Settings icon */}
                      <GiProfit></GiProfit>

                      <span className="is-drawer-close:hidden">My Profile</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/invoice"
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Invoice"
                    >
                      {/* Settings icon */}
                      <GiProfit></GiProfit>

                      <span className="is-drawer-close:hidden">Invoice</span>
                    </NavLink>
                  </li>
                </>
              )}

              {role === "librarian" && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/addbook"
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Add Book"
                    >
                      {/* Settings icon */}
                      <GiProfit></GiProfit>

                      <span className="is-drawer-close:hidden">Add Book</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/mybooks"
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="My books"
                    >
                      {/* Settings icon */}
                      <GiProfit></GiProfit>

                      <span className="is-drawer-close:hidden">My Books</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/orders"
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Orders"
                    >
                      {/* Settings icon */}
                      <GiProfit></GiProfit>

                      <span className="is-drawer-close:hidden">Orders</span>
                    </NavLink>
                  </li>
                </>
              )}
              {role === "admin" && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/allusers"
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="All Users"
                    >
                      {/* Settings icon */}
                      <GiProfit></GiProfit>

                      <span className="is-drawer-close:hidden">All Users</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/managebooks"
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Manage books"
                    >
                      {/* Settings icon */}
                      <GiProfit></GiProfit>

                      <span className="is-drawer-close:hidden">
                        Manage Books
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myprofile"
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="My Profile"
                    >
                      {/* Settings icon */}
                      <GiProfit></GiProfit>

                      <span className="is-drawer-close:hidden">My Profile</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
