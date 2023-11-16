import React from "react";
import Introduction from "../layout/Introduction";
import Rules from "../layout/Rules";
import Criteria from "../layout/Criteria";
import FAQs from "../layout/FAQs";
import Prizes from "../layout/Prizes";
import Hero from "../layout/Hero";

const Home = () => {
  return (
    <main className="max-w-[1440px] mx-auto text-white">
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <FAQs />
      <Prizes />
    </main>
  );
};

export default Home;
