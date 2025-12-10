import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import book1 from "./../../assets/3-copies-the-simple-seerah-part-2-Photoroom.png";
import book2 from "./../../assets/world-watch-history-3-Photoroom.png";
import book3 from "./../../assets/19BOOKLEONARD1-articleLarge-Photoroom.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      interval={2000}
    >
      <div className="  mx-auto flex  items-center">
        <div className="w-[50%] text-start p-15 ">
          <h1 className="text-5xl font-semibold mb-2">The Simple Seerah</h1>
          <p className="text-gray-600 ">
            "A practical guide to building better habits through small,
            consistent improvements. The book explains how tiny changes compound
            over time, offering strategies to break bad habits, form new ones,
            and redesign your environment for long-term success.
          </p>
          <Link
            to={"/books"}
            className="btn rounded-3xl text-white w-[300px] bg-orange-500 mt-10"
          >
            All Books
          </Link>
        </div>
        <div className="w-[50%] ">
          <img src={book1} alt="" />
        </div>
      </div>
      <div className="  mx-auto flex  items-center">
        <div className="w-[50%] text-start p-15 ">
          <h1 className="text-5xl font-semibold mb-2">World Watch History</h1>
          <p className="text-gray-600 ">
            "A practical guide to building better habits through small,
            consistent improvements. The book explains how tiny changes compound
            over time, offering strategies to break bad habits, form new ones,
            and redesign your environment for long-term success.
          </p>
          <Link
            to={"/books"}
            className="btn rounded-3xl text-white w-[300px] bg-orange-500 mt-10"
          >
            All Books
          </Link>
        </div>
        <div className="w-[50%] ">
          <img className="h-[500px] !w-[550px]" src={book2} alt="" />
        </div>
      </div>
      <div className="  mx-auto flex  items-center">
        <div className="w-[50%] text-start p-15 ">
          <h1 className="text-5xl font-semibold mb-2">
            The Lords Of Easy Money
          </h1>
          <p className="text-gray-600 ">
            "A practical guide to building better habits through small,
            consistent improvements. The book explains how tiny changes compound
            over time, offering strategies to break bad habits, form new ones,
            and redesign your environment for long-term success.
          </p>
          <Link
            to={"/books"}
            className="btn rounded-3xl text-white w-[300px] bg-orange-500 mt-10"
          >
            All Books
          </Link>
        </div>
        <div className="w-[50%] ">
          <img className="h-[550px] !w-[420px]" src={book3} alt="" />
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
