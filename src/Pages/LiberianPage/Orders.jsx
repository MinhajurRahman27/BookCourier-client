import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { MdPaid } from "react-icons/md";

const Orders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { refetch, data: books = [] } = useQuery({
    queryKey: ["ordered book"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-order-book/${user.email}`);
      return res.data;
    },
  });

  console.log(books);

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
  const handleShipped = (id) => {
    const updateStatus = { status: "shipped" };
    axiosSecure
      .patch(`/update-order/${id}`, updateStatus)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount) {
          refetch();

          alert("modified");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleDeliver = (id) => {
    const updateStatus = { status: "delivered" };
    axiosSecure
      .patch(`/update-order/${id}`, updateStatus)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount) {
          refetch();

          alert("modified");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // const cancelBtn =(id)=>{
  //   const
  // }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-600 text-white">
              <th>Sl.</th>
              <th>Title</th>
              <th>Payment Status</th>
              <th>Status</th>
              <th>Date</th>
              <th>Change Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((o, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td className="font-semibold">{o.bookname}</td>
                <td className="font-semibold text-gray-600">{o.payment}{o.payment === 'paid'? <MdPaid className="inline"/> : ''}</td>
                <td className="font-semibold">{o.status}</td>
                <td className="font-semibold">{o.date}</td>
                <td className="">
                  {/* <button className="btn bg-gray-400 text-white">pending</button> */}
                  <button className="btn bg-gray-400 text-white" onClick={() => handleShipped(o._id)}>
                    shipped
                  </button>
                  <button className="btn bg-gray-400 text-white" onClick={() => handleDeliver(o._id)}>
                    delivered
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleCancelbtn(o._id)}
                    className="btn bg-red-400 text-white"
                  >
                    Cancel
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

export default Orders;
