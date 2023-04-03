import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import TrainingProgram from "../TrainingProgram/TrainingProgram";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <TrainingProgram />
      <WhyChooseUs />
    </>
  );
};

export default Home;
