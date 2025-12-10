import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className="w-11/12 mx-auto m-10">
      <div>
        <h1 className="text-5xl font-semibold text-center  mb-3">
          Customer Reviews
        </h1>
        <p className="text-lg text-gray-400  text-center">
          See how people feel about our service.
        </p>
        <div className="flex items-center justify-center  mt-10 gap-2">
          <div className="max-w-sm p-6 rounded-2xl shadow-lg  border border-gray-200">
            <FaQuoteLeft className="text-orange-500 text-3xl mb-3" />

            <p className="text-gray-500 mb-6 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              dmodi, deserunt nihil sed sapiente non iusto consequuntur velit.
            </p>

            <div className="border-t border-orange-200 my-4"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-900">
                <img
                  className="rounded"
                  src="https://i.ibb.co.com/qL04XBQq/download.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold ">Minhajur Rahman</h3>
                <p className="text-sm text-gray-500">Senior Designer</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm p-6 rounded-2xl shadow-lg  border border-gray-200">
            <FaQuoteLeft className="text-orange-500 text-3xl mb-3" />

            <p className="text-gray-500 mb-6 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              dmodi, deserunt nihil sed sapiente non iusto consequuntur velit.
            </p>

            <div className="border-t border-orange-200 my-4"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-900">
                <img
                  className="rounded"
                  src="https://i.ibb.co.com/qL04XBQq/download.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold ">Minhajur Rahman</h3>
                <p className="text-sm text-gray-500">Senior Designer</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm p-6 rounded-2xl shadow-lg  border border-gray-200">
            <FaQuoteLeft className="text-orange-500 text-3xl mb-3" />

            <p className="text-gray-500 mb-6 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              dmodi, deserunt nihil sed sapiente non iusto consequuntur velit.
            </p>

            <div className="border-t border-orange-200 my-4"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-900">
                <img
                  className="rounded"
                  src="https://i.ibb.co.com/qL04XBQq/download.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold ">Minhajur Rahman</h3>
                <p className="text-sm text-gray-500">Senior Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
