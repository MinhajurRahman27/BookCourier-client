import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { MdOutlinePublishedWithChanges, MdUnpublished } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../../components/Spinner";

const ManageBook = () => {
  const axiosSecure = useAxios();
  const { refetch, data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allbooks/admin");
      return res.data;
    },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handlePublish = (id) => {
    const status = { status: "Published" };

    axiosSecure.patch(`/books-update/${id}`, status).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast(`book modified to ${status.status}`);
      }
    });
  };

  const handleUnPublish = (id) => {
    const status = { status: "Unpublished" };
    axiosSecure.patch(`/books-update/${id}`, status).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast(`book modified to ${status.status}`);
      }
    });
  };
  const handleDelete = (id) => {
    axiosSecure.delete(`/delete-book/${id}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        toast("deleted");

        try {
          axiosSecure.delete(`/delete-order/${id}`).then((res) => {
            if (res.data.deletedCount) {
              toast("order deleted");
            }
          });
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="overflow-x-auto p-10 px-20">
        <table className="table overflow-x-auto">
          {/* head */}
          <thead>
            <tr className="bg-gray-600 text-white">
              <th>Sl.</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((u, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="rounded h-20 w-20">
                        <img src={u.bookimage} alt="books" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{u.bookname}</div>
                </td>
                <td>
                  <div className="font-bold text-gray-500">
                    {u.status}{" "}
                    {u.status === "Unpublished" ? (
                      <MdUnpublished className="inline text-red-400  font-bold text-[18px]" />
                    ) : (
                      <MdOutlinePublishedWithChanges className="inline text-green-600 text-[18px]" />
                    )}
                  </div>
                </td>
                <td className="font-semibold">
                  <button
                    onClick={() => handlePublish(u._id)}
                    className="btn bg-gray-500 hover:bg-orange-500"
                  >
                    Publish
                  </button>
                </td>
                <td className="font-semibold">
                  <button
                    onClick={() => handleUnPublish(u._id)}
                    className="btn bg-gray-500 hover:bg-orange-500"
                  >
                    Unpublish
                  </button>
                </td>
                <td className="font-semibold">
                  <button
                    onClick={() => handleDelete(u._id)}
                    className="btn bg-red-400 hover:bg-orange-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ManageBook;
