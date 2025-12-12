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
      <NavLink className="btn" to="/">
        <li>Home</li>
      </NavLink>
      <NavLink className="btn" to="/books">
        <li>Books</li>
      </NavLink>
      <NavLink className="btn" to="/dashboard">
        <li>Dashboard</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <GrBook className="text-4xl text-orange-500" />
          <a className="btn-ghost text-2xl">BookCourier</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Theme></Theme>
        <div className="m-2 w-5 h-5 rounded-[50%] ">
          <img className="w-5 h-5 rounded-lg" src={user?.photoURL} alt="" />
        </div>

        {user ? (
          <button className="btn" onClick={handleSignOut}>
            LogOut
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login/Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
