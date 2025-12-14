import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import BookCard from "../../components/BookCard.jsx/BookCard";
import { motion } from "framer-motion";

const LatestBook = () => {
  const axiosSecure = useAxios();
  const { data: allbooks = [] } = useQuery({
    queryKey: ["latest-book"],
    queryFn: async () => {
      const res = await axiosSecure.get("/latest-book");
      return res.data;
    },
  });

  return (
    <div className="my-25">
      <motion.h1
        className="text-[40px]  md:text-[60px]  font-bold  text-sm/14"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Latest Books
        </h1>
      </motion.h1>

      <motion.div
        className=""
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <div className="grid justify-items-center sm:grid-cols-2   lg:grid-cols-4 mt-10">
          {allbooks.map((book, index) => (
            <BookCard key={index} book={book}></BookCard>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LatestBook;
