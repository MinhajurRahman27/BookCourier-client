import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { FcCancel, FcPaid } from "react-icons/fc";

const MyOrders = () => {
  // const [searchParams] = useSearchParams();
  // const sessionId = searchParams.get("session_id");
  // console.log(sessionId);
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["myorders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myorder/${user.email}`);
      return res.data;
    },
  });

  const handlePayment = async (o) => {
    const paymentInfo = {
      bookname: o.bookname,
      id: o._id,
      cost: o.price,
      buyerEmail: user?.email,
    };

    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo
    );

    window.location.assign(res.data.url);
  };

  // useEffect(() => {
  //   if (sessionId) {
  //     axiosSecure
  //       .patch(`/session-status?session_id=${sessionId}`)
  //       .then((res) => {
  //         console.log(res.data);
  //       });
  //   }
  // }, [sessionId, axiosSecure]);

  const handleCancelbtn = (id) => {
    const updateStatus = { status: "cancelled" };
    axiosSecure
      .patch(`/update-order/${id}`, updateStatus)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          refetch();

          alert("modified");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-600 text-white">
              <th>Sl.</th>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{o.bookname}</td>
                <td>{o.date}</td>
                <td
                  className={`${
                    o.status === "cancelled" ? "text-red-700" : ""
                  }`}
                >
                  {o.status}
                </td>
                <td className="flex items-center gap-2">
                  {o.payment}{" "}
                  {o.payment === "paid" ? <FcPaid className="text-xl" /> : ""}
                </td>
                <td>
                  {/* <button
                    onClick={() => handleCancelbtn(o._id)}
                    className={`"btn" ${
                      o.status === "cancelled" || o.payment === "paid"
                        ? "hidden"
                        : "inline-block btn"
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handlePayment(o)}
                    className={`"btn" ${
                      o.status === "cancelled" || o.payment === "paid"
                        ? "hidden"
                        : "inline-block btn"
                    } `}
                  >
                    Pay Now
                  </button> */}
                  <button
                    onClick={() => handleCancelbtn(o._id)}
                    className={`${
                      o.status === "cancelled" || o.payment === "paid"
                        ? "hidden"
                        : "inline-block px-6 py-2 bg-white text-gray-800 border-2 border-gray-300 rounded-md hover:bg-gray-100 font-medium transition-all cursor-pointer mr-2"
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handlePayment(o)}
                    className={`${
                      o.status === "cancelled" || o.payment === "paid"
                        ? "hidden"
                        : "inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-medium transition-all shadow-sm cursor-pointer"
                    }`}
                  >
                    Pay Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
