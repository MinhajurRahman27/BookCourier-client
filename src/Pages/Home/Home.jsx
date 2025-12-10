import React from "react";
import Coverage from "../../components/CoverageSection/Coverage";
import { useLoaderData } from "react-router";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import Banner from "./Banner";
import LatestBook from "./LatestBook";
import WhyChooseBookCourier from "./WhyChoosesection";

const Home = () => {
  const { user } = useAuth();
  const {role} = useRole()
  const serviceCenter = useLoaderData();

  
  return (
    <div>
      
      <Banner></Banner>
      <LatestBook></LatestBook>
      <Coverage serviceCenter={serviceCenter}></Coverage>
      <WhyChooseBookCourier></WhyChooseBookCourier>
    </div>
  );
};

export default Home;
