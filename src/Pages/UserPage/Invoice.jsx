import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";

const Invoice = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-600 text-white ">
              <th>Sl.</th>
              <th>Title</th>
              <th>Payment ID</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((o, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{o.bookname}</td>
                <td>
                  <p className="flex items-center gap-2">
                    <IoCheckmarkDoneCircleSharp className="text-xl font-semibold text-green-700" />
                    {o.transactionId}
                  </p>
                </td>
                <td className="flex items-center gap-2 font-semibold">
                  {o.amount}
                  <FaSackDollar className=" text-orange-600 font-semibold" />
                </td>
                <td>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
