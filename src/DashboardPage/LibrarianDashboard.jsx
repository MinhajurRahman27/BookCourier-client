import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import useRole from "../Hooks/useRole";
import { Link } from "react-router";
import { FaBook, FaShippingFast, FaCheckCircle, FaClock } from "react-icons/fa";
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

const LibrarianDashboard = () => {
  const { role } = useRole();
  const { user } = useAuth();

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
  const { data: books = [] } = useQuery({
    queryKey: ["ordered book"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-order-book/${user.email}`);
      return res.data;
    },
  });

  const { data: mybooks = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/libraian-books/${user.email}`);
      return res.data;
    },
  });

  const publishCount = mybooks.filter((b) => b.status === "Published").length;
  const unpublishCount = mybooks.filter((b) => b.status === "Unpublished").length;

  const pendingCount = books.filter((b) => b.status === "pending").length;
  const shippedCount = books.filter((b) => b.status === "shipped").length;
  const deliveryCount = books.filter((b) => b.status === "delivered").length;

  const orderChartData = [
    {
      name: "Pending",
      count: pendingCount,
    },
    {
      name: "Shipped",
      count: shippedCount,
    },
    {
      name: "Delivered",
      count: deliveryCount,
    },
  ];

  const bookStatusChart = [
    {
      name: "Published",
      count: publishCount,
    },
    {
      name: "Unpublished",
      count: unpublishCount,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6 mb-12">
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaBook className="text-2xl text-blue-500 mb-3" />
          <h1 className="text-lg font-semibold text-gray-700">My Books</h1>
          <p className="text-2xl text-blue-600 font-bold">{mybooks.length}</p>
        </div>
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaCheckCircle className="text-2xl text-green-500 mb-3" />
          <h1 className="text-lg font-semibold text-gray-700">Published</h1>
          <p className="text-2xl font-bold text-green-600">{publishCount}</p>
        </div>
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaClock className="text-2xl text-amber-500 mb-3" />
          <h1 className="text-lg font-semibold text-gray-700">Pending Orders</h1>
          <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
        </div>
        <div className="p-6 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <FaShippingFast className="text-2xl text-purple-500 mb-3" />
          <h1 className="text-lg font-semibold text-gray-700">Total Orders</h1>
          <p className="text-2xl font-bold text-purple-600">{books.length}</p>
        </div>
      </div>

      {/* Order Status Chart Section */}
      <div className="rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">Order Status Distribution</h2>
        <div className="flex gap-10 flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2">
            <BarChart
              width={500}
              height={300}
              data={orderChartData}
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
                {orderChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={primaryColors[index % primaryColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                dataKey="count"
                data={orderChartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {orderChartData.map((entry, index) => (
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

      {/* Book Status Chart Section */}
      <div className="rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">Book Publication Status</h2>
        <div className="flex gap-10 flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                dataKey="count"
                data={bookStatusChart}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {bookStatusChart.map((entry, index) => (
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
              data={bookStatusChart}
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
                {bookStatusChart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={primaryColors[index % primaryColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Book Name</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Customer</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {books.slice(0, 5).map((book, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                  <td className="py-4 px-4 font-medium text-gray-900">{book.bookname}</td>
                  <td className="py-4 px-4 text-gray-600">{book.name}</td>
                  <td className="py-4 px-4 text-gray-600">{book.date}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      book.status === 'delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : book.status === 'shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {book.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {books.length > 5 && (
            <div className="mt-6 text-center">
              <Link 
                to="/dashboard/orders" 
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                View All Orders ({books.length})
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 mx-auto">
        {/* User Profile Card */}
        <div className="rounded-3xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
            Librarian Profile
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

export default LibrarianDashboard;
