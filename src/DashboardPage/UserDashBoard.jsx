import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { Link } from "react-router";
import { FaBook, FaShoppingCart, FaHeart, FaDollarSign } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
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

const UserDashBoard = () => {
  const { user } = useAuth();
  const { role } = useRole();

  // Define lighter color schemes that match your website theme
  const primaryColors = [
    '#93C5FD', // Light blue
    '#86EFAC', // Light green
    '#FBBF24', // Light amber
    '#C084FC', // Light purple
    '#FB7185', // Light pink
    '#60A5FA', // Light indigo
  ];

  const axiosSecure = useAxios();
  const { data: orders = [] } = useQuery({
    queryKey: ["myorders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myorder/${user.email}`);
      return res.data;
    },
  });

  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  const { data: wishlist = [] } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-wishlist/${user.email}`);
      return res.data;
    },
  });

  const cancelled = orders.filter((o) => o.status === "cancelled").length;
  const paid = orders.filter((o) => o.payment === "paid").length;
  const unpaid = orders.filter((o) => o.payment === "unpaid").length;
  const totalSpent = payments.reduce((sum, payment) => sum + payment.amount, 0);

  const orderStatusData = [
    {
      name: "Paid",
      count: paid,
    },
    {
      name: "Unpaid", 
      count: unpaid,
    },
    {
      name: "Cancelled",
      count: cancelled,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6 mb-12">
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaShoppingCart className="text-2xl text-blue-500 mb-3" />
          <h1 className="text-lg font-semibold ">Total Orders</h1>
          <p className="text-2xl  font-bold">{orders.length}</p>
        </div>
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <IoCheckmarkDoneCircleSharp className="text-2xl text-green-500 mb-3" />
          <h1 className="text-lg font-semibold ">Paid Orders</h1>
          <p className="text-2xl font-bold ">{paid}</p>
        </div>
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaHeart className="text-2xl text-pink-500 mb-3" />
          <h1 className="text-lg font-semibold ">Wishlist Items</h1>
          <p className="text-2xl font-bold ">{wishlist.length}</p>
        </div>
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaDollarSign className="text-2xl text-purple-500 mb-3" />
          <h1 className="text-lg font-semibold ">Total Spent</h1>
          <p className="text-2xl font-bold ">${totalSpent.toFixed(2)}</p>
        </div>
      </div>

      {/* Order Status Chart Section */}
      <div className="rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-2xl font-semibold  mb-8 text-center">Order Status Overview</h2>
        <div className="flex gap-10 flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2">
            <BarChart
              width={500}
              height={300}
              data={orderStatusData}
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
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={primaryColors[index % primaryColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                dataKey="count"
                data={orderStatusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {orderStatusData.map((entry, index) => (
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

      {/* Recent Orders Table */}
      <div className="rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-2xl font-semibold  mb-8 text-center">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-500">Book Name</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-500">Date</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-500">Price</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                  <td className="py-4 px-4 font-medium text-gray-500">{order.bookname}</td>
                  <td className="py-4 px-4 text-gray-600">{order.date}</td>
                  <td className="py-4 px-4 text-gray-600">${order.price}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.payment === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : order.status === 'cancelled'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.payment === 'paid' ? 'Paid' : order.status === 'cancelled' ? 'Cancelled' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {orders.length > 5 && (
            <div className="mt-6 text-center">
              <Link 
                to="/dashboard/myorders" 
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                View All Orders ({orders.length})
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 mx-auto">
        {/* User Profile Card */}
        <div className="rounded-3xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-2xl font-semibold  mb-8 text-center">
            User Profile
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

export default UserDashBoard;
