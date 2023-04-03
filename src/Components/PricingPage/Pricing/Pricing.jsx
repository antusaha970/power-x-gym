import React from "react";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Footer from "../../Shared/Footer/Footer";
import PriceBox from "../PriceBox/PriceBox";

const Pricing = () => {
  return (
    <>
      <TopHeader title="PRICING PLANS" />
      <PriceBox />
      <Footer />
    </>
  );
};

export default Pricing;
