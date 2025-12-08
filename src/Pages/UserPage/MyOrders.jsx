import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

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
      my order : {orders.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
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
                <td>{o.status}</td>
                <td>{o.payment}</td>
                <td>
                  <button
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
