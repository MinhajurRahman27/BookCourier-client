import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  console.log(book);
  const { _id, bookname, bookimage, author, price } = book;
  return (
    <div className="card bg-base-100  sm:w-70 shadow-2xl shadow-indigo-500 hover:scale-105 transition delay-150 duration-300 ease-in-out mb-10  md:mb-0  md:m-10 ">
      <figure className="px-10 pt-10">
        <img
          src={bookimage}
          alt="Shoes"
          className="rounded-xl w-[200px] h-[300px]"
        />
      </figure>
      <div className="card-body ">
        <h2 className=" font-bold text-[18px] text-center">{bookname}</h2>
        <p className="text-center font-semibold text-gray-600">{author}</p>
        <p className="text-center font-semibold text-gray-600">{price}</p>
        <div className="card-actions  flex justify-center">
          <Link
            to={`/bookdetails/${_id}`}
            className="btn w-[90%] hover:opacity-90 mr-2 rounded-4xl  border-0 text-white bg-indigo-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
