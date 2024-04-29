import React from "react";
import Hero from "../components/hero/Hero";
import Topsellers from "../components/topsellers/Topsellers";
import Guarantee from "../components/guarantee/Guarantee";

const Home = () => {
  return (
    <div>
      <Hero />
      <Topsellers />
      <Guarantee />
    </div>
  );
};

export default Home;
