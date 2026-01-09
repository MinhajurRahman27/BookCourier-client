import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import BookCard from "../../components/BookCard.jsx/BookCard";
import { FaSort } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const Books = () => {
  const [search, setSearch] = useState("");
  const [allbooks, setAllbook] = useState([]);
  const axiosSecure = useAxios();

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["allbook", search],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/allbooks?searchText=${search}&status=Published`
      );
      setAllbook(res.data);
      return res.data;
    },
  });

  console.log(books);

  // Sync fetched books → local state
  // useEffect(() => {
  //   setAllbook(books);
  // }, [books.length,books]);

  const handleHighTolow = () => {
    setAllbook([...allbooks].sort((a, b) => Number(b.price) - Number(a.price)));
  };

  const handlelowTohigh = () => {
    setAllbook([...allbooks].sort((a, b) => Number(a.price) - Number(b.price)));
  };

  return (
    <div className="mb-20 pt-20">
      <div className="flex gap-3 items-center justify-between px-10 pt-5 mb-10 md:mb-0">
        <label className="input shadow shadow-gray-600 rounded-2xl border-0">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </label>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn border-gray-300 border rounded-2xl"
          >
            Sort <FaSort />
          </div>
          <ul className="dropdown-content menu rounded-box">
            <li>
              <button onClick={handleHighTolow}>H-L</button>
            </li>
            <li>
              <button onClick={handlelowTohigh}>L-H</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <div className="col-span-4">
            <Spinner></Spinner>
          </div>
        ) : (
          allbooks.map((book, idx) => <BookCard key={idx} book={book} />)
        )}
      </div>
    </div>
  );
};

export default Books;
