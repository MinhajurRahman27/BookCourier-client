import React from "react";

const WishlistCard = ({ book }) => {
  const { bookname, bookimage, author } = book;
  return (
    <div className="card bg-base-100  sm:w-70 shadow-2xl   mb-10  md:mb-0  md:m-10 p-5 ">
      <figure className="">
        <img
          src={bookimage}
          alt="Shoes"
          className="rounded-xl  h-[300px]  w-full object-fit transition-transform duration-500   hover:scale-105"
        />
      </figure>
      <div className="card-body p-0 mt-3">
        <h2 className=" font-semibold text-2xl ">{bookname}</h2>
        <p className=" font-semibold text-gray-600">{author}</p>
      </div>
    </div>
  );
};

export default WishlistCard;
