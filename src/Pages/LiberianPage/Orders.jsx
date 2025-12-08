import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";

const Orders = () => {
  const axiosSecure = useAxios();
  const { refetch, data: books = [] } = useQuery({
    queryKey: ["ordered book"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-order-book");
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
  const handleDeliver = (id) => {
    const updateStatus = { status: "delivered" };
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

  // const cancelBtn =(id)=>{
  //   const
  // }
  return (
    <div>
      orders book : {books.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
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
                <td>{o.bookname}</td>
                <td>{o.payment}</td>
                <td>{o.status}</td>
                <td>{o.date}</td>
                <td className="">
                  
                    
                    <button className="btn">pending</button>
                    <button className="btn" onClick={() => handleShipped(o._id)}>
                      shipped
                    </button>
                    <button className="btn" onClick={() => handleDeliver(o._id)}>
                      delivered
                    </button>
                  
                </td>
                <td>
                  <button
                    onClick={() => handleCancelbtn(o._id)}
                    className="btn"
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
