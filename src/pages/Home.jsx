import React from "react";
// import Navbar from "../components/Navbar";
import Introduction from "../layout/Introduction";
import Rules from "../layout/Rules";
import Criteria from "../layout/Criteria";
import FAQs from "../layout/FAQs";

const Home = () => {
  return (
    <main className="max-w-[1440px] mx-auto text-white">
      <Introduction />
      <Rules />
      <Criteria />
      <FAQs />
    </main>
  );
};

export default Home;
