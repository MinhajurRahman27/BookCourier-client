import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { Link } from "react-router";
import { LogOut } from "lucide-react";
import { FaBan, FaBook, FaUserFriends } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import useAxios from "../Hooks/useAxios";

const AdminDashboard = () => {
  const { user, handleSignOut } = useAuth();
  const { role } = useRole();

  // Define lighter color schemes that match your website theme
  const primaryColors = [
    '#93C5FD', // Light blue
    '#0a90ceff', // Light green
    '#FBBF24', // Light amber
    '#C084FC', // Light purple
    '#FB7185', // Light pink
    '#136cd8ff', // Light indigo
  ];

  const axiosSecure = useAxios();
  const { data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allbooks/admin");
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

  const publishCOunt = books.filter((a) => a.status === "Published").length;
  const UnPublishCOunt = books.filter((a) => a.status === "Unpublished").length;

  const adminCOunt = users.filter((a) => a.role === "admin").length;
  const userCOunt = users.filter((a) => a.role === "user").length;
  const librarianCOunt = users.filter((a) => a.role === "librarian").length;
  console.log(publishCOunt, UnPublishCOunt);

  const bookChartdata = [
    {
      name: "Published",
      count: publishCOunt,
    },
    {
      name: "Unpublished",
      count: UnPublishCOunt,
    },
  ];

  const chartData = [
    {
      name: "Admin",
      count: adminCOunt,
    },
    {
      name: "User",
      count: userCOunt,
    },
    {
      name: "librarian",
      count: librarianCOunt,
    },
  ];

  // console.log("user:", users.length);
  // console.log("books:", books.length);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6 mb-12">
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaUserFriends className="text-2xl text-pink-500 mb-3" />
          <h1 className="text-lg font-semibold ">Total Users</h1>
          <p className="text-2xl font-bold ">{users.length}</p>
        </div>
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <IoShieldCheckmarkSharp className="text-2xl text-pink-500 mb-3" />
          <h1 className="text-lg font-semibold ">Total Roles</h1>
          <p className="text-2xl font-bold ">3</p>
        </div>
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaBan className="text-2xl text-pink-500 mb-3" />
          <h1 className="text-lg font-semibold ">Suspended Users</h1>
          <p className="text-2xl font-bold ">0</p>
        </div>
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaBook className="text-2xl text-pink-500 mb-3" />
          <h1 className="text-lg font-semibold ">Total Books</h1>
          <p className="text-2xl font-bold ">{books.length}</p>
        </div>
      </div>
      {/* User Roles Chart Section */}
      <div className="rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-2xl font-semibold  mb-8 text-center">User Roles Distribution</h2>
        <div className="flex gap-10 flex-col-reverse lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <YAxis 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={primaryColors[index % primaryColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                dataKey="count"
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={primaryColors[index % primaryColors.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </div>
        </div>
      </div>
      {/* Books Status Chart Section */}
      <div className="rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-2xl font-semibold  mb-8 text-center">Books Publication Status</h2>
        <div className="flex gap-10 flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                dataKey="count"
                data={bookChartdata}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {bookChartdata.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={primaryColors[index % primaryColors.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </div>
          <div className="w-full lg:w-1/2">
            <BarChart
              width={500}
              height={300}
              data={bookChartdata}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <YAxis 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {bookChartdata.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={primaryColors[index % primaryColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      </div>
      
      {/* Data Table Section */}
      <div className="rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">Recent Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Email</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Role</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, 5).map((user, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium text-gray-900">
                        {user.name || 'N/A'}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{user.email}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === 'admin' 
                        ? 'bg-red-100 text-red-800' 
                        : user.role === 'librarian'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {users.length > 5 && (
            <div className="mt-6 text-center">
              <Link 
                to="/dashboard/allusers" 
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                View All Users ({users.length})
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 mx-auto">
        {/* User Profile Card */}
        <div className="rounded-3xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-2xl font-semibold  mb-8 text-center">
            Admin Profile
          </h3>
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <img
                className="rounded-full w-24 h-24 object-cover border-4 border-blue-300 shadow-sm"
                src={user.photoURL}
                alt="Profile"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                ✓
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-gray-700 mb-2">
              {user.displayName}
            </h4>
            <p className="text-blue-600 font-medium text-lg mb-6 bg-blue-100 px-4 py-2 rounded-full">
              {role}
            </p>

            <div className="w-full space-y-4 mt-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Email</span>
                <span className="text-gray-700 font-medium max-w-[60%] break-all text-right">
                  {user.email}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Role</span>
                <span className="text-gray-700 font-medium">{role}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Location</span>
                <span className="text-gray-700 font-medium">New York, USA</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-500 font-medium">Member Since</span>
                <span className="text-gray-700 font-medium">Jan 2023</span>
              </div>
            </div>

            <Link
              to={"/dashboard/myprofile"}
              className="w-full mt-8 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all duration-200 shadow-sm text-center transform hover:scale-[1.02]"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
