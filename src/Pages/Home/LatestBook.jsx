import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import BookCard from "../../components/BookCard.jsx/BookCard";

const LatestBook = () => {
  const axiosSecure = useAxios();
  const { data: allbooks = [] } = useQuery({
    queryKey: ["latest-book"],
    queryFn: async () => {
      const res = await axiosSecure.get("/latest-book");
      return res.data;
    },
  });

  console.log(allbooks);
  return (
    <div className="my-20">
      <h1 className="text-5xl font-semibold text-center">Latest Books</h1>
      <h1>{allbooks.length}</h1>
      <div className="grid grid-cols-4">
        {allbooks.map((book, index) => (
          <BookCard key={index} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBook;
