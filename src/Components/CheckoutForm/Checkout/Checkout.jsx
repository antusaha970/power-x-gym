import React, { createContext, useState } from "react";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Footer from "../../Shared/Footer/Footer";
import CheckoutForm from "../CheckoutForm/CheckoutFrom";
import Stepper from "../Stepper/Stepper";

export const FormState = createContext();

const Checkout = () => {
  const [formData, setFormData] = useState({});
  return (
    <FormState.Provider value={[formData, setFormData]}>
      <TopHeader fontSize="40px" title="YOUR GYM MEMBERSHIP" />
      <Stepper />
      <CheckoutForm />
      <Footer />
    </FormState.Provider>
  );
};

export default Checkout;
