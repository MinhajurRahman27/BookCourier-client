import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);

  // if (loading) {
  //   return <span class="loading loading-spinner loading-sm"></span>;
  // }
  return (
    <div className="lg:w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
