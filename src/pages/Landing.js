import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <Team />
    </>
  );
};

export default Landing;
