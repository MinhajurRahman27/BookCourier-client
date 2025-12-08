import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import BookCard from "../../components/BookCard.jsx/BookCard";

const Books = () => {
  const axiosSecure = useAxios();
  const { data: books = [] } = useQuery({
    queryKey: ["allbook"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allbooks");
      return res.data;
    },
  });
  return (
    <div>
      book length: {books.length}
     
     <div className="grid grid-cols-4">
       {books.map((book, index) => (
        <BookCard key={index} book={book}></BookCard>
      ))}
     </div>
    </div>
  );
};

export default Books;
