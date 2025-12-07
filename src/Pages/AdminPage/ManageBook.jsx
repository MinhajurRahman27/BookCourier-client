import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const ManageBook = () => {
  const axiosSecure = useAxios();
  const { refetch, data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allbooks");
      return res.data;
    },
  });

  const handlePublish = (id) => {
    const status = { status: "Published" };

    axiosSecure.patch(`/books-update/${id}`, status).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        alert(`book modified to ${status.status}`);
      }
    });
  };
  const handleUnPublish = (id) => {
    const status = { status: "Unpublished" };
    axiosSecure.patch(`/books-update/${id}`, status).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        alert(`book modified to ${status.status}`);
      }
    });
  };
  const handleDelete = (id) => {
    axiosSecure.delete(`/delete-book/${id}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        alert("deleted");
      }
    });
  };

  return (
    <div>
      manage books
      <div className="overflow-x-auto p-10 px-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Actions</th>
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
                  <div className="font-bold text-gray-700">{u.status}</div>
                </td>
                <td className="font-semibold">
                  <button
                    onClick={() => handlePublish(u._id)}
                    className="btn btn-ghost"
                  >
                    Publish
                  </button>
                </td>
                <td className="font-semibold">
                  <button
                    onClick={() => handleUnPublish(u._id)}
                    className="btn btn-ghost"
                  >
                    Unpublish
                  </button>
                </td>
                <td className="font-semibold">
                  <button
                    onClick={() => handleDelete(u._id)}
                    className="btn btn-ghost"
                  >
                    Delete
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

export default ManageBook;
