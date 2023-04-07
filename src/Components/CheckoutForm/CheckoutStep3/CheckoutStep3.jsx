import React from "react";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Stepper from "../Stepper/Stepper";
import Footer from "../../Shared/Footer/Footer";
import CheckoutStep3Box from "../CheckoutStep3Box/CheckoutStep3Box";

const CheckoutStep3 = () => {
  return (
    <>
      <TopHeader fontSize="40px" title="YOUR GYM MEMBERSHIP" />
      <Stepper step={3} />
      <CheckoutStep3Box />
      <Footer />
    </>
  );
};

export default CheckoutStep3;
