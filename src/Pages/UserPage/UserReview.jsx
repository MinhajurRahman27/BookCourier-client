// import React from "react";

// const UserReview = ({ r }) => {
//   const { name, image, date, comment } = r;

//   return (
//     <div className="card w-60 bg-base-100 card-sm shadow-xl">
//       <div className="card-body">
//         <div className="flex gap-2">
//           <div className="w-10 h-10">
//             <img className="w-10 h-10 rounded" src={image} alt="" />
//           </div>
//           <div className="">
//             <h2 className="card-title text-gray-700">{name}</h2>
//             <div >
//               <p className=" ">{comment}</p>
//             </div>

//             <p className="text-gray-500 ">{date}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserReview;
import React from "react";

const UserReview = ({ r }) => {
  const { name, image, date, comment } = r;

  return (
    <div className="card w-60 bg-base-100 card-sm shadow-xl">
      <div className="card-body">
        <h1 className="font-semibold text-right text-gray-500">Review</h1>
        <div className="flex  gap-2">
          <div className="flex-shrink-0 w-10 h-10">
            <img className="w-10 h-10 rounded" src={image} alt="" />
          </div>
          <div className="flex-1 min-w-0 ">
            <h2 className="card-title text-gray-500 ">{name}</h2>
            <div>
              <p className="break-words">{comment}</p>
            </div>
            <p className="text-gray-500 text-right font-semibold">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
