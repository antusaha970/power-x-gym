import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import TrainingProgram from "../TrainingProgram/TrainingProgram";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Footer from "../../Shared/Footer/Footer";
import { motion, useScroll } from "framer-motion";
import "./Home.css";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Services />
      <AboutUs />
      <TrainingProgram />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Home;
