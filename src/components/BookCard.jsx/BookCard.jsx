import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  console.log(book);
  const { _id, bookname, bookimage, author, price } = book;

  return (
    <div className="card bg-base-100 w-70   sm:w-70 md:w-70 md:shadow-2xl   mb-10  md:mb-0  md:m-10 p-5 ">
      <figure className="">
        <img
          src={bookimage}
          alt="Shoes"
          className="rounded-xl  h-[300px]  w-full object-cover transition-transform duration-500   hover:scale-105"
        />
      </figure>
      <div className="card-body p-0 mt-3">
        <h2 className=" font-semibold text-xl sm:text-2xl ">{bookname}</h2>
        <p className=" font-semibold text-gray-600">{author}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-semibold">${price}</span>
          <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
            New
          </span>
        </div>
        <div className="card-actions  flex justify-center">
          <Link
            to={`/bookdetails/${_id}`}
            className="btn w-full hover:opacity-90 mr-2 rounded-4xl  border-0 text-white bg-orange-500 hover:scale-105 transition delay-150 duration-300 ease-in-out"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

// import React from "react";
// import { Link } from "react-router"; // Fixed: react-router instead of react-router

//   const { _id, bookname, bookimage, author, price } = book;

//   // Fallback for missing image
//   const imageSrc = bookimage || "/images/book-placeholder.jpg";

//   return (
//     <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 w-full max-w-[260px] mx-auto">
//       {/* Book Image */}
//       <Link to={`/bookdetails/${_id}`} className="block">
//         <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
//           <img
//             src={imageSrc}
//             alt={bookname}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             loading="lazy"
//             onError={(e) => {
//               e.target.src = "/images/book-placeholder.jpg";
//             }}
//           />
//           {/* Subtle overlay on hover */}
//           <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
//         </div>
//       </Link>

//       {/* Card Content */}
//       <div className="p-5 space-y-3">
//         <div>
//           <h3 className="font-medium text-gray-900 text-lg leading-tight line-clamp-2 min-h-[3.5rem] group-hover:text-indigo-700 transition-colors">
//             <Link
//               to={`/bookdetails/${_id}`}
//               className="after:absolute after:inset-0"
//             >
//               {bookname}
//             </Link>
//           </h3>

//           <p className="text-sm text-gray-600 mt-1.5 font-light">
//             by{" "}
//             <span className="text-gray-800">{author || "Unknown Author"}</span>
//           </p>
//         </div>

//         {/* Optional: Star Rating (uncomment if you have rating data) */}
//         {/*
//         <div className="flex items-center gap-1">
//           {[...Array(5)].map((_, i) => (
//             <span
//               key={i}
//               className={`text-sm ${
//                 i < Math.floor(rating) ? "text-amber-500" : "text-gray-300"
//               }`}
//             >
//               ★
//             </span>
//           ))}
//           {reviews > 0 && (
//             <span className="text-xs text-gray-500 ml-1">({reviews})</span>
//           )}
//         </div>
//         */}

//         {/* Price */}
//         <div className="flex items-center justify-between">
//           <p className="text-2xl font-bold text-gray-900">
//             ${typeof price === "number" ? price.toFixed(2) : price}
//           </p>
//         </div>

//         {/* Action Buttons */}
//         <div className="pt-2 space-y-2">
//           <Link
//             to={`/bookdetails/${_id}`}
//             className="w-full block text-center bg-indigo-600 text-white font-medium py-2.5 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
//           >
//             View Details
//           </Link>

//           {/* Optional: Add to Cart button (quick action) */}
//           {/* <button className="w-full border border-indigo-600 text-indigo-600 font-medium py-2.5 rounded-md hover:bg-indigo-50 transition">
//             Add to Cart
//           </button> */}
//         </div>
//       </div>

//       {/* Optional: Badge for New/Bestseller */}
//       {/* {isNew && (
//         <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//           New
//         </span>
//       )} */}
//     </div>
//   );
// };

// export default BookCard;

// import React from "react";

// const BookCard = ({ book = {} }) => {
//   const {
//     _id = "1",
//     bookname = "The Great Gatsby",
//     bookimage = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
//     author = "F. Scott Fitzgerald",
//     price = "12.99"
//   } = book;

//   return (
//     <div className="group bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 w-[280px] mx-auto overflow-hidden border border-gray-100">

//       {/* Image Section with Overlay */}
//       <div className="relative w-full h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
//         <img
//           src={bookimage}
//           alt={bookname}
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         {/* Subtle gradient overlay on hover */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6 bg-white">
//         {/* Book Title */}
//         <h2 className="font-serif text-xl text-gray-900 line-clamp-2 mb-2 leading-tight">
//           {bookname}
//         </h2>

//         {/* Author */}
//         <p className="text-sm text-gray-500 italic mb-3 tracking-wide">
//           by {author}
//         </p>

//         {/* Divider */}
//         <div className="w-12 h-px bg-gray-300 mb-4"></div>

//         {/* Price */}
//         <div className="flex items-center justify-between mb-5">
//           <span className="text-2xl font-bold text-gray-900">
//             ${price}
//           </span>
//           <span className="text-xs text-gray-400 uppercase tracking-wider">
//             New
//           </span>
//         </div>

//         {/* CTA Button */}
//         <a
//           href={`/bookdetails/${_id}`}
//           className="block w-full bg-gray-900 text-white py-3 text-center text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gray-800 hover:tracking-widest"
//         >
//           View Details
//         </a>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

//
