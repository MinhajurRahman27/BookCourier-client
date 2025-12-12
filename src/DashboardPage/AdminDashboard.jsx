import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { Link } from "react-router";
import { LogOut } from "lucide-react";
import { FaBan, FaBook, FaUserFriends } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminDashboard = () => {
  const { user, handleSignOut } = useAuth();
  const { role } = useRole();

  const axiosSecure = useAxios();
  const { data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allbooks");
      return res.data;
    },
  });

  const axiosSecure2 = useAxios();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure2.get(`/alluser/${user.email}`);
      return res.data;
    },
  });

  const chartData = [
    {
      name: "Users",
      count: users.length,
    },
    {
      name: "Books",
      count: books.length,
    },
  ];

  // console.log("user:", users.length);
  // console.log("books:", books.length);
  return (
    <div>
      <div className=" flex justify-center gap-5">
        <div className="p-5 bg-white shadow-xl rounded-xl ">
          <FaUserFriends className="text-xl" />
          <h1 className="text-xl">Total User : {users.length}</h1>
        </div>
        <div className="p-5 bg-white shadow-xl rounded-xl">
          <IoShieldCheckmarkSharp className="text-xl" />
          <h1 className="text-xl">Total Roles : 3</h1>
        </div>
        <div className="p-5 bg-white shadow-xl rounded-xl">
          <FaBan className="text-xl" />
          <h1 className="text-xl">Suspended User : 0</h1>
        </div>
        <div className="p-5 bg-white shadow-xl rounded-xl">
          <FaBook className="text-xl" />
          <h1 className="text-xl">Total Book : {books.length}</h1>
        </div>
      </div>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "50vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={chartData}
        margin={{
          top: 25,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
       
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
      <div className="mt-6 grid grid-cols-1 lg:w-[500px] mx-auto gap-6">
        {/* User Profile Card */}
        <div className="bg-slate-800 rounded-xl p-6 border-none">
          <h3 className="text-lg font-semibold text-white mb-6">
            User Profile
          </h3>
          <div className="flex flex-col items-center">
            <div>
              <img
                className="rounded-2xl w-20 h-20"
                src={user.photoURL}
                alt=""
              />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">
              {user.displayName}
            </h4>
            <p className="text-purple-400 text-sm mb-4">{role}</p>

            <div className="w-full space-y-3 mt-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-700">
                <span className="text-slate-400 text-sm">Email</span>
                <span className="text-white text-sm">{user.email}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-700">
                <span className="text-slate-400 text-sm">Role</span>
                <span className="text-white text-sm">{role}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-700">
                <span className="text-slate-400 text-sm">Location</span>
                <span className="text-white text-sm">New York, USA</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-400 text-sm">Member Since</span>
                <span className="text-white text-sm">Jan 2023</span>
              </div>
            </div>

            <Link
              to={"/dashboard/myprofile"}
              className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg text-center"
            >
              Edit Profile
            </Link>
            <button
              onClick={handleSignOut}
              className="w-full mt-3 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <LogOut size={18} />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
