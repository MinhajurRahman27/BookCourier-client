import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import Theme from "../../darklightmode/theme";
import useAuth from "../../Hooks/useAuth";
import { ChevronDown, LayoutDashboard, LogOut, User } from "lucide-react";
import useRole from "../../Hooks/useRole";

const Navbar = () => {
  
  const{role} = useRole()
  const { signOutUser, user } = useAuth();
  const handleSignOut = () => {
   
    signOutUser().then(() => {
      // console.log("signout successful");
      
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const links = (
    <>
      <NavLink
        className="btn border-0 hover:text-primary"
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className="btn border-0 hover:text-primary"
        to="/books"
      >
        <li>Books</li>
      </NavLink>

      <NavLink
        className="btn border-0 hover:text-primary "
        to="/howitwork"
      >
        <li>How It Works</li>
      </NavLink>
      
      {/* Only show role-based links when user is logged in */}
      {user && role === "user" &&
        <NavLink
          className="btn border-0 hover:text-primary"
          to="/dashboard/myorders"
        >
          <li>My Orders</li>
        </NavLink>
      }
      {user && role === "librarian" &&
        <NavLink
          className="btn border-0 hover:text-primary"
          to="/dashboard/orders"
        >
          <li>Orders</li>
        </NavLink>
      }
      {user && role === "admin" &&
        <NavLink
          className="btn border-0 hover:text-primary"
          to="/dashboard/managebooks"
        >
          <li>Manage Books</li>
        </NavLink>
      }

      {/* Only show Dashboard link when user is logged in */}
     
        <NavLink
          className="btn border-0 hover:text-primary"
          to="/dashboard"
        >
          <li>Dashboard</li>
        </NavLink>
      
    </>
  );

  const menuItems = [
    {
      icon: User,
      label: "My Profile",
      href: "/dashboard/myprofile",
      description: "View and edit your profile",
    },
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
      description: "Your personal dashboard",
    },
  ];
  return (
    <div className="fixed z-6000 navbar bg-base-100 shadow-sm ">
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
        <div className="flex items-center font-semibold  rounded-3xl p-1 ">
          {/* <GrBook className="text-3xl md:text-4xl text-primary" /> */}
          <a className="btn-ghost text-[20px] sm:text-2xl"> <span className="text-primary text-shadow-lg">Book</span><span className="text text-shadow-lg">Courier</span></a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Theme></Theme>
        {user ? (
          <div className="relative hover:opacity-90  bg-primary rounded-3xl" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center rounded-3xl gap-3 px-2 py-0   transition-all duration-300   cursor-pointer group "
            >
              {/* Profile Avatar */}
              <div className="my-2 w-7 h-7 rounded-[50%] border-none ">
                <img
                  className="w-7 object-cover h-7 rounded-3xl"
                  src={user?.photoURL}
                  alt=""
                />
              </div>

              {/* Name & Role */}
              <div className="hidden md:block text-left">
                <div className="text-sm font-semibold text-white ">
                  {user?.displayName}
                </div>
              </div>

              {/* Dropdown Arrow */}
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl  overflow-hidden transition-all duration-300 origin-top ${
                isOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {/* User Info Header */}
              <div className="bg-primary  p-4 border-b border-orange-200">
                <div className="flex items-center gap-3">
                  <div className="my-2 w-10 h-10 rounded-[50%] border-none ">
                    <img
                      className="w-10 h-10 object-cover rounded-3xl"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {user?.displayName}
                    </div>
                    <div className="text-[12px] text-gray-300">
                      {user?.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 px-4 py-3 hover:bg-orange-50 transition-all duration-200 group"
                    // onClick={() => setIsOpen(false)}
                  >
                    <div className="w-10 h-10 bg-red-100  rounded-xl flex items-center justify-center group-hover:bg-red-50 transition-all  duration-200 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 hover:bg-red-50 transition-all duration-200">
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {item.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100"></div>

              {/* Logout Button */}
              <button
                className="w-full flex items-center gap-4 px-4 py-3 hover:bg-red-50 transition-all duration-200 group cursor-pointer"
                onClick={handleSignOut}
              >
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                  <LogOut className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-red-600">Logout</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Sign out of your account
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn rounded-3xl bg-primary text-white">
            Login/Register
          </Link>
        )}
        {/* {user && (
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
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
