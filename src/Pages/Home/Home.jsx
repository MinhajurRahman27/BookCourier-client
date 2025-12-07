import React from "react";
import Coverage from "../../components/CoverageSection/Coverage";
import { useLoaderData } from "react-router";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  const {role} = useRole()
  const serviceCenter = useLoaderData();

  
  return (
    <div>
      <h1>Role: {role}</h1>
      <Coverage serviceCenter={serviceCenter}></Coverage>
    </div>
  );
};

export default Home;
