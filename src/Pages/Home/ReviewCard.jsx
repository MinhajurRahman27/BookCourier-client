import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className="w-11/12 mx-auto m-10 my-30">
      <div>
        <h1 className="text-2xl md:text-5xl font-semibold text-center  mb-3">
          Customer Reviews
        </h1>
        <p className="text-lg text-gray-400  text-center">
          See how people feel about our service.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center  mt-20 gap-2">
          <div className="md:max-w-sm p-6 rounded-2xl shadow-lg  border border-gray-200">
            <FaQuoteLeft className="text-orange-500 text-3xl mb-3" />

            <p className="text-gray-500 mb-6 leading-relaxed">
              BookCourier makes buying books very easy and smooth. The website
              is fast, well organized, and simple to use. I especially like how
              clearly the books are categorized and how easy it is to place an
              order.
            </p>

            <div className="border-t border-orange-200 my-4"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-900">
                <img
                  className="rounded  w-10 h-10 object-cover"
                  src="https://i.ibb.co.com/qL04XBQq/download.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold ">Minhaj Khondaker</h3>
                <p className="text-sm text-gray-500">Senior Developer</p>
              </div>
            </div>
          </div>
          <div className="md:max-w-sm p-6 rounded-2xl shadow-lg  border border-gray-200">
            <FaQuoteLeft className="text-orange-500 text-3xl mb-3" />

            <p className="text-gray-500 mb-6 leading-relaxed">
              This is a great platform for book lovers. The design is clean, the
              navigation is simple, and the delivery process feels reliable.
              BookCourier saves a lot of time compared to visiting physical
              stores.
            </p>

            <div className="border-t border-orange-200 my-4"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-900">
                <img
                  className="rounded w-10 h-10 object-cover"
                  src="https://i.ibb.co.com/rfps9rjm/premium-photo-1661963697387-9ba753d0df95.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold ">Tariq Rahman</h3>
                <p className="text-sm text-gray-500">Teacher</p>
              </div>
            </div>
          </div>
          <div className="md:max-w-sm p-6 rounded-2xl shadow-lg  border border-gray-200">
            <FaQuoteLeft className="text-orange-500 text-3xl mb-3" />

            <p className="text-gray-500 mb-6 leading-relaxed">
              BookCourier offers a pleasant online book shopping experience.
              From browsing books to checkout, everything works smoothly. The
              dashboard system also makes it easy to manage orders and users.
            </p>

            <div className="border-t border-orange-200 my-4"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-900">
                <img
                  className="rounded w-10 h-10 object-cover"
                  src="https://i.ibb.co.com/ccQvkn0T/young-bearded-man-with-striped-shirt.jpg"
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
