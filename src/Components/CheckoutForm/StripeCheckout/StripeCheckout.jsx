import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
  AuBankAccountElement,
} from "@stripe/react-stripe-js";
import { Box, Container, Typography } from "@mui/material";

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

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "18px",
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          padding: "30px",
          border: "1px solid black",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Credit Card Payment
          </Typography>
          <CardElement options={cardElementOptions} />
          {paymentError && <div>{paymentError}</div>}
          {paymentSuccess && <div>Payment succeeded!</div>}
          <button type="submit">Pay</button>
        </form>
      </Box>
    </Container>
  );
};

export default StripePaymentForm;
