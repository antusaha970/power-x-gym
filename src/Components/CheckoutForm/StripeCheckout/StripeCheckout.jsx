import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripePaymentForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      setPaymentSuccess(true);
      setPaymentError(null);
      // Here you would handle the successful payment, for example by sending the paymentMethod.id to your server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement />
      </label>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>Payment succeeded!</div>}
      <button type="submit">Pay</button>
    </form>
  );
};

export default StripePaymentForm;
