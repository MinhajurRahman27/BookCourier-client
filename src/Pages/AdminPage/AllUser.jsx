import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";

const AllUser = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxios();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/alluser/${user.email}`);
      return res.data;
    },
  });

  // console.log(users);

  if (loading) {
    return <span className="loading loading-spinner loading-sm"></span>;
  }

  const makeAdmin = (u) => {
    const update = {
      role: "admin",
    };
    // console.log(u);
    axiosSecure.patch(`/update-user/${u._id}`, update).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        alert("updated as admin");
      }
    });
  };

  const makeLibrarian = (u) => {
    const update = {
      role: "librarian",
    };
    // console.log(u);
    axiosSecure.patch(`/update-user/${u._id}`, update).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        alert("updated as librarian");
      }
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
                      <div className="w-10 h-10">
                        <img src={u.photoURL} alt="Users photo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold ">{u.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{u.email}</td>
                <td className="font-semibold ">
                  <div className="bg-blue-950 text-white p-1 border-gray-500  rounded">
                    {u.role}
                    {u.role === "admin" ? (
                      <MdAdminPanelSettings className="text-green-600 text-xl inline" />
                    ) : (
                      ""
                    )}
                  </div>
                </td>
                <th className="flex">
                  <button
                    onClick={() => makeLibrarian(u)}
                    className="btn  inline-block px-6 py-2  text-white rounded-md  font-medium  cursor-pointer mr-2 bg-green-500"
                  >
                    Make Librarian
                  </button>
                  <button
                    onClick={() => makeAdmin(u)}
                    className="btn   inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-medium transition-all shadow-sm cursor-pointer"
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
