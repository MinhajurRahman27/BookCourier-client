import React from "react";

const UserReview = ({ r }) => {
  const { name, image, date, comment } = r;

  return (
    <div className="card w-80 bg-base-100 card-sm shadow-sm border-2 border-gray-600">
      <div className="card-body">
        <div className="flex gap-2">
          <div className="">
            <img className="w-10 h-20 rounded" src={image} alt="" />
          </div>
          <div className="">
            <h2 className="card-title text-gray-700">{name}</h2>
            <p className="text-xl ">{comment}</p>

            <p className="text-gray-500 ">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
