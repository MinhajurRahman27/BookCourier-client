import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

const AllUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/alluser/${user.email}`);
      return res.data;
    },
  });

  console.log(users);

  const makeAdmin = (u) => {
    const update = {
      role: "admin",
    };
    console.log(u);
    axiosSecure.patch(`/update-user/${u._id}`, update).then((res) => {
      if (res.data.modifiedCount) {
        alert("updated as admin");
      }
    });
  };

  const makeLibrarian = (u) => {
    console.log(u);
  };

  return (
    <div>
      all users {users.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={u.photoURL} alt="Users photo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{u.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{u.email}</td>
                <td className="font-semibold">{u.role}</td>
                <th className="flex">
                  <button
                    onClick={() => makeLibrarian(u)}
                    className="btn btn-primary btn-xs"
                  >
                    Make Librarian
                  </button>
                  <button
                    onClick={() => makeAdmin(u)}
                    className="btn btn-secondary btn-xs"
                  >
                    Make Admin
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
