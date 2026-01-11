import Coverage from "../../components/CoverageSection/Coverage";
import { Link, useLoaderData } from "react-router";

import Banner from "./Banner";
import LatestBook from "./LatestBook";
import WhyChooseBookCourier from "./WhyChoosesection";
import GetInTouch from "./GetInTouch";
import ReviewCard from "./ReviewCard";
import FAQ from "./FAQ";
import StatsSection from "./StatsSection";
import HowItWorks from "./HowItWorks";
import NewsletterSection from "./NewsletterSection";
import ScrollingTextSection from "./SponsorsSection";
import BlogSection from "./BlogSection";
import { IoCaretDown } from "react-icons/io5";

const Home = () => {
  const serviceCenter = useLoaderData();

  return (
    <div className="pt-20 overflow-hidden">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <div className="hidden sm:flex -m-10  flex items-center justify-center opacity-50 text-5xl text-primary   animate-bounce"><IoCaretDown className="text-center"/></div>
      </section>
      <section>
        <LatestBook></LatestBook>
      </section>
      <section>
        <Coverage serviceCenter={serviceCenter}></Coverage>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section>
        <WhyChooseBookCourier></WhyChooseBookCourier>
      </section>
      
      <section>
        <ScrollingTextSection></ScrollingTextSection>
      </section>
      <section>
        <ReviewCard></ReviewCard>
      </section>
      <section>
        <FAQ></FAQ>
      </section>
      <section>
        <BlogSection></BlogSection>
      </section>
      <section>
        <NewsletterSection></NewsletterSection>
      </section>
      <section>
        <GetInTouch></GetInTouch>
      </section>
         
    </div>
  );
};

export default Home;
