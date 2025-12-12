import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { LogOut } from "lucide-react";
import { Link } from "react-router";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const UserDashBoard = () => {
  const { user, handleSignOut } = useAuth();
  const { role } = useRole();

  const axiosSecure = useAxios();
  const { data: invoice = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
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
  const { data: orders = [] } = useQuery({
    queryKey: ["myorders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myorder/${user.email}`);
      return res.data;
    },
  });

  // console.log(orders);

  const purchaseData = payments.map((p) => ({
    date: p.date,
    buy: p.amount,
  }));

  const orderCountData = orders.map((o) => ({
    date: o.date,
    count: 1,
  }));

  const cancelled = orders.filter((o) => o.status === "cancelled").length;
  const paid = orders.filter((o) => o.payment === "paid").length;
  const unpaid = orders.filter((o) => o.payment === "unpaid").length;

  const pieData = [
    { name: "Cancelled", value: cancelled },
    { name: "Paid", value: paid },
    { name: "Unpaid", value: unpaid },
  ];

  const radarData = [
    { subject: "Cancelled", count: cancelled, fullMark: orders.length },
    { subject: "Paid", count: paid, fullMark: orders.length },
    { subject: "Unpaid", count: unpaid, fullMark: orders.length },
  ];

  // console.log(purchaseData);

  return (
    <div>
      <div className="flex justify-between ">
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "50vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={purchaseData}
          margin={{
            top: 25,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar dataKey="buy" fill="#1E293B" background={{ fill: "#eee" }} />
          <Bar dataKey="date" fill="#82ca9d" />
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
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={pieData}
            cx="50%"
            cy="100%"
            outerRadius="120%"
            fill="#1E293B"
            label
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
      <div className="flex justify-between">
        <AreaChart
          style={{
            width: "70%",
            maxWidth: "500px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={orderCountData}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis width="auto" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#1E293B"
            fill="#1E293B"
          />
        </AreaChart>

        <RadarChart
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
          outerRadius="80%"
          data={radarData}
          margin={{
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
          }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Orders"
            dataKey="count"
            stroke="#1E293B"
            fill="#1E293B"
            fillOpacity={0.6}
          />
        </RadarChart>
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

export default UserDashBoard;
