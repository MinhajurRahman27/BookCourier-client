import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import BookCard from "../../components/BookCard.jsx/BookCard";
import WishlistCard from "../../components/BookCard.jsx/WishlistCard";

const MyWhishlist = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const { data: whishlist = [] } = useQuery({
    queryKey: ["mywishlist", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/mywishlist-get/${user.email}`);
      return res.data;
    },
  });

  console.log(whishlist);
  return (
    <div>
      <div className="grid grid-cols-3">
        {whishlist.map((book) => (
          <WishlistCard key={book._id} book={book}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default MyWhishlist;
