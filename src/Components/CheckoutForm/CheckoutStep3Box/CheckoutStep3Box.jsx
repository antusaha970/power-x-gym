import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutStep3Box = () => {
  const navigation = useNavigate();
  const handleBackHome = () => {
    navigation("/");
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          Congratulation Your Membership has been created
          <br />
          Please Check Your Email address for more information and your class
          schedule
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <button className="btn-brand" onClick={handleBackHome}>
            Back to home
          </button>
        </Box>
      </Container>
    </section>
  );
};

export default CheckoutStep3Box;
