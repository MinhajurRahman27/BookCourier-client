import React from "react";
import Coverage from "../../components/CoverageSection/Coverage";
import { useLoaderData } from "react-router";

const Home = () => {
  const serviceCenter = useLoaderData();
  // console.log(serviceCenter);
  return (
    <div>
      <Coverage serviceCenter={serviceCenter}></Coverage>
    </div>
  );
};

export default Home;
