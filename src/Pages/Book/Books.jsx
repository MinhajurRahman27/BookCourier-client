import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import BookCard from "../../components/BookCard.jsx/BookCard";
import { FaSort } from "react-icons/fa";

const Books = () => {
  const [search, setSearch] = useState("");
  const [allbooks, setAllbook] = useState([]);
  const axiosSecure = useAxios();
  const { data } = useQuery({
    queryKey: ["allbook", search],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allbooks?searchText=${search}`);
      return setAllbook(res.data);
    },
  });

  console.log("all book:", allbooks);

  const handleHighTolow = () => {
    const sorted = [...allbooks].sort(
      (a, b) => Number(b.price) - Number(a.price)
    );

    setAllbook(sorted);
  };
  const handlelowTohigh = () => {
    const sorted = [...allbooks].sort(
      (a, b) => Number(a.price) - Number(b.price)
    );

    setAllbook(sorted);
  };
  return (
    <div>
      <div className="flex items-center justify-between px-10 pt-5">
        <label className="input  shadow shadow-gray-600 rounded-2xl border-0">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </label>

        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn border-gray-300 border m-1 w-31 rounded-2xl"
          >
            Sort
            <FaSort />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu  rounded-box z-1 w-33 "
          >
            <li className="">
              <button onClick={handleHighTolow}>High to Low</button>
            </li>
            <li>
              <button onClick={handlelowTohigh}>Low to High</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {allbooks.map((book, index) => (
          <BookCard key={index} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
