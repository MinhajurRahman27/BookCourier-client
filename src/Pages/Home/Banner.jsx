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
      autoPlay={false}
      showThumbs={false}
      infiniteLoop={true}
      interval={3000}
    >
      <div className="  mx-auto flex flex-col-reverse lg:flex-row  items-center  ">
        <div className="w-full sm:w-full  lg:w-[50%] md:text-start p-6 md:p-15 ">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            The Simple Seerah
          </h1>
          <p className="text-gray-500 ">
            This book presents a thoughtful and engaging account of the life of
            Prophet Muhammad (peace be upon him). It covers his early life,
            prophethood, hardships, and leadership, highlighting his character,
            compassion, and wisdom. Seerah helps readers understand the
            foundation of Islam and offers timeless lessons for personal growth
            and moral living.
          </p>
          <Link
            to={"/books"}
            className="btn rounded-3xl text-white w-[300px] bg-orange-500 mt-4 md:mt-10"
          >
            All Books
          </Link>
        </div>
        <div className="sm:w-[50%] md:w-[50%] ">
          <img src={book1} alt="" />
        </div>
      </div>
      <div className="   mx-auto flex flex-col-reverse lg:flex-row  items-center  ">
        <div className="w-full sm:w-full  lg:w-[50%] md:text-start p-6 md:p-15">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            World Watch History
          </h1>
          <p className="text-gray-500 ">
            World Watch History explores the rise and fall of major
            civilizations, important events, and influential figures that shaped
            human society. From ancient empires to the modern world, the book
            provides a clear understanding of how cultures, politics, and ideas
            evolved over time.
          </p>
          <Link
            to={"/books"}
            className="btn rounded-3xl text-white w-[300px] bg-orange-500 mt-4 md:mt-10"
          >
            All Books
          </Link>
        </div>
        <div className="md:w-[50%] ">
          <img
            className="h-[315px]  md:h-[500px]  md:w-[550px]!"
            src={book2}
            alt=""
          />
        </div>
      </div>
      <div className="  mx-auto flex flex-col-reverse lg:flex-row  items-center ">
        <div className="w-full sm:w-full  lg:w-[50%] md:text-start p-6 md:p-15">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            The Lords Of Easy Money
          </h1>
          <p className="text-gray-500 ">
            This book examines how central banks, especially the U.S. Federal
            Reserve, used easy monetary policies to respond to financial crises.
            It explains the impact of low interest rates and large-scale money
            printing on markets, wealth inequality, and the global economy.
          </p>
          <Link
            to={"/books"}
            className="btn rounded-3xl text-white w-[300px] bg-orange-500 mt-10"
          >
            All Books
          </Link>
        </div>
        <div className=" md:w-[50%] ">
          <img
            className=" h-[315px] sm:w-[300px] md:h-[550px] md:w-[300px] lg:w-[420px]!"
            src={book3}
            alt=""
          />
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
