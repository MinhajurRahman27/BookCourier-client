import React from "react";
import { Link, NavLink } from "react-router";
import Theme from "../../darklightmode/theme";
import { GrBook } from "react-icons/gr";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { signOutUser, user } = useAuth();
  const handleSignOut = () => {
    signOutUser().then(() => {
      // console.log("signout successful");
    });
  };
  const links = (
    <>
      <NavLink
        className="btn border-0 hover:border-b-gray-500 hover:border-b-2"
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className="btn border-0 hover:border-b-gray-500 hover:border-b-2"
        to="/books"
      >
        <li>Books</li>
      </NavLink>
      <NavLink
        className="btn border-0 hover:border-b-gray-500 hover:border-b-2"
        to="/dashboard"
      >
        <li>Dashboard</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden  p-2 md:p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* <GrBook />
        <a className="btn-ghost text-xl">BookCourier</a> */}
        <div className="flex items-end font-semibold">
          <GrBook className="text-3xl md:text-4xl text-orange-500" />
          <a className="btn-ghost md:text-2xl">BookCourier</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Theme></Theme>
        {user && (
          <div className="m-2 w-5 h-5 rounded-[50%] border-none">
            <img className="w-5 h-5 rounded-lg" src={user?.photoURL} alt="" />
          </div>
        )}

        {user ? (
          <button
            className="btn bg-orange-500 text-white  rounded-3xl w-[100px]"
            onClick={handleSignOut}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn rounded-3xl bg-orange-500 text-white"
          >
            Login/Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
