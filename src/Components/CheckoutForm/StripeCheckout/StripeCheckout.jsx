import React, { useContext, useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
  AuBankAccountElement,
} from "@stripe/react-stripe-js";
import { Box, Container, Stack, Typography } from "@mui/material";
import card1 from "../../../assets/images/card1.png";
import card2 from "../../../assets/images/card2.png";
import card3 from "../../../assets/images/card3.png";
import "./StripeCheckout.css";
import { useNavigate } from "react-router-dom";
import { client } from "../../../Api/Client";
import { RegisteredUserContext } from "../../../Contexts/Contexts";

const StripePaymentForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigation = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handlePayNow = async (event) => {
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
        fontSize: "16px",
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
  const [user, setUser] = useContext(RegisteredUserContext);
  const handleNextStep = async () => {
    console.log(user);
    try {
      const response = await client.post("/registerData", user);
      const mailResponse = await client.post("/sendMail", {
        email: user.email,
      });
      console.log(response.data);
      console.log(mailResponse.data);
    } catch (error) {
      console.log(error);
    }
    // navigation("/checkout/step3");
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          padding: "30px",
          border: "1px solid black",
        }}
      >
        <form>
          <Stack
            direction={{ xs: "column", lg: "row", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              paddingBottom: "20px",
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              Credit Card Payment
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={card1} alt="card" className="cardImg" />
              <img src={card2} alt="card" className="cardImg" />
              <img src={card3} alt="card" className="cardImg" />
            </Box>
          </Stack>
          <CardElement options={cardElementOptions} />
          {paymentError && <div>{paymentError}</div>}
          {paymentSuccess && <div>Payment succeeded!</div>}
        </form>
      </Box>
      <Box
        sx={{
          margin: "15px 0",
        }}
      >
        <button className="btn-brand pay-btn" onClick={handleNextStep}>
          Pay later
        </button>
        <button className="btn-brand pay-btn" onClick={handlePayNow}>
          Pay With Card
        </button>
      </Box>
    </Container>
  );
};

export default StripePaymentForm;
