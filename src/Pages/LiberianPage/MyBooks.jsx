import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";

const MyBooks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/libraian-books/${user.email}`);
      return res.data;
    },
  });

  // console.log(books);
  return (
    <div>
      <div className="overflow-x-auto py-2 md:p-10 md:px-20">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-gray-600 text-white">
              <th>Sl.</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((u, index) => (
              <tr key={index}>
                <th className="">{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="rounded h-20 w-full">
                        <img src={u.bookimage} alt="books" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{u.bookname}</div>
                </td>
                <td className="font-semibold ">
                  <Link
                    to={`/dashboard/mybooks/editbooks/${u._id}`}
                    className="bg-primary text-white px-6 py-3 rounded-3xl w-[200px] text-center inline-block hover:opacity-90 font-semibold"
                  >
                    Edit
                  </Link>
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
