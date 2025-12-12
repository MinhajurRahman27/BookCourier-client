import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

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
      invoice
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
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
                <td>{o.transactionId}</td>
                <td>{o.amount}</td>
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
