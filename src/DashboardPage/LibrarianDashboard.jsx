import React from "react";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
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
} from "recharts";
import useRole from "../Hooks/useRole";
import { Link } from "react-router";

const LibrarianDashboard = () => {
  const { role } = useRole();
  const { user, loading } = useAuth();
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

  const publishCOunt = mybooks.filter((b) => b.status === "Published").length;
  const unpublishCOunt = mybooks.filter(
    (b) => b.status === "Unpublished"
  ).length;

  const pendingCOunt = books.filter((b) => b.status === "pending").length;
  const shippedCOunt = books.filter((b) => b.status === "shipped").length;
  const deliveryCOunt = books.filter((b) => b.status === "delivered").length;

  const orderChartData = [
    {
      name: "pending",
      count: pendingCOunt,
    },
    {
      name: "shipped",
      count: shippedCOunt,
    },
    {
      name: "delivered",
      count: deliveryCOunt,
    },
  ];

  const bookStatusChart = [
    {
      name: "Published",
      count: publishCOunt,
    },
    {
      name: "Unpublished",
      count: unpublishCOunt,
    },
  ];

  console.log(pendingCOunt, shippedCOunt, deliveryCOunt);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div className="flex items-center  shadow-xl my-10">
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "50vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={orderChartData}
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

          <Bar dataKey="count" fill="#1E293B" />
        </BarChart>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 2,
          }}
          responsive
        >
          <Pie
            dataKey="count"
            startAngle={180}
            endAngle={0}
            data={orderChartData}
            cx="50%"
            cy="100%"
            outerRadius="120%"
            fill="#1E293B"
            label
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip></Tooltip>
        </PieChart>
      </div>
      <div className="flex items-center my-15 shadow-xl">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 2,
          }}
          responsive
        >
          <Pie
            dataKey="count"
            startAngle={180}
            endAngle={0}
            data={bookStatusChart}
            cx="50%"
            cy="100%"
            outerRadius="120%"
            fill="#1E293B"
            label
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip></Tooltip>
        </PieChart>
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "50vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={bookStatusChart}
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

          <Bar dataKey="count" fill="#1E293B" />
        </BarChart>
      </div>
      <div className="mt-15   mx-auto gap-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianDashboard;
