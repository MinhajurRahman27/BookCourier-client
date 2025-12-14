import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import useAuth from "../Hooks/useAuth";
import Spinner from "../components/Spinner";

const RootLayout = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="lg:w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
