import React, { createContext, useState } from "react";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Footer from "../../Shared/Footer/Footer";
import CheckoutForm from "../CheckoutForm/CheckoutFrom";
import Stepper from "../Stepper/Stepper";

const Checkout = () => {
  return (
    <>
      <TopHeader fontSize="40px" title="YOUR GYM MEMBERSHIP" />
      <Stepper step={1} />
      <CheckoutForm />
      <Footer />
    </>
  );
};

export default Checkout;
