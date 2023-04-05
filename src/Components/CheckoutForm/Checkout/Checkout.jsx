import React, { createContext, useState } from "react";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Footer from "../../Shared/Footer/Footer";
import CheckoutForm from "../CheckoutForm/CheckoutFrom";

export const FormState = createContext();

const Checkout = () => {
  const [formData, setFormData] = useState({});
  return (
    <>
      <TopHeader title="YOUR GYM MEMBERSHIP" />
      <CheckoutForm />
      <Footer />
    </>
  );
};

export default Checkout;
