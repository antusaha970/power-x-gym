import React from "react";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Stepper from "../Stepper/Stepper";
import Footer from "../../Shared/Footer/Footer";
import StripeForm from "../StripeForm/StripeForm";

const CheckoutStep2 = () => {
  return (
    <>
      <TopHeader fontSize="40px" title="YOUR GYM MEMBERSHIP" />
      <Stepper step={2} />
      <StripeForm />
      <Footer />
    </>
  );
};

export default CheckoutStep2;
