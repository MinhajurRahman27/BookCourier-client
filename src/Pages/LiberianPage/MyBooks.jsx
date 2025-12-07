import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";

const MyBooks = () => {
  const axiosSecure = useAxios();
  const { data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allbooks");
      return res.data;
    },
  });

  console.log(books);
  return (
    <div>
      all users {books.length}
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
                <td className="font-semibold">
                  <button className="btn btn-primary btn-xs">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooks;
