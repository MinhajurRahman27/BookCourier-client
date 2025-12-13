import React from "react";
import Coverage from "../../components/CoverageSection/Coverage";
import { useLoaderData } from "react-router";

import Banner from "./Banner";
import LatestBook from "./LatestBook";
import WhyChooseBookCourier from "./WhyChoosesection";
import GetInTouch from "./GetInTouch";
import ReviewCard from "./ReviewCard";

const Home = () => {
  const serviceCenter = useLoaderData();

  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <LatestBook></LatestBook>
      </section>
      <section>
        <Coverage serviceCenter={serviceCenter}></Coverage>
      </section>
      <section>
        <WhyChooseBookCourier></WhyChooseBookCourier>
      </section>
      <section>
        <ReviewCard></ReviewCard>
      </section>
      <section>
        <GetInTouch></GetInTouch>
      </section>
    </div>
  );
};

export default Home;
