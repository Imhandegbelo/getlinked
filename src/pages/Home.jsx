import React from "react";
// import Navbar from "../components/Navbar";
import Introduction from "../layout/Introduction";
import Rules from "../layout/Rules";

const Home = () => {
  return (
    <main className="max-w-[1440px] mx-auto text-white">
      <Introduction />
      <Rules/>
    </main>
  );
};

export default Home;
