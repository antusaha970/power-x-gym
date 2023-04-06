import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "../StripeCheckout/StripeCheckout";

const stripePromise = loadStripe(
  "pk_test_51MlwTFC8ZcEv5iRQMhzDwobIHKU89fYbq8cjbF3scis4vgWUuE0vGYXvH684FGOrvG1kd0kOijap4QM9nfVnYw1G00MZcV00qg"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripePaymentForm />
    </Elements>
  );
};

export default ProcessPayment;
