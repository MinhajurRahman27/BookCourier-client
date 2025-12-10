import React from "react";
import Coverage from "../../components/CoverageSection/Coverage";
import { useLoaderData } from "react-router";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import Banner from "./Banner";

const Home = () => {
  const { user } = useAuth();
  const {role} = useRole()
  const serviceCenter = useLoaderData();

  
  return (
    <div>
      
      <Banner></Banner>
      <Coverage serviceCenter={serviceCenter}></Coverage>
    </div>
  );
};

export default Home;
