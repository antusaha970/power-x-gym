import React from "react";
import { Container, Box, Typography } from "@mui/material";

const pricingData = [
  {
    title: "Advance Plan",
    price: "140",
  },
  {
    title: "Basic Plan",
    price: "120",
  },
  {
    title: "Beginners Plan",
    price: "90",
  },
];

const PriceBox = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: "40px 0",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
              paddingBottom: "10px",
            }}
          >
            <font color="#FCD842">Choose the Offer</font> that Suits you
          </Typography>
          <Typography
            variant="small"
            component="p"
            sx={{
              textAlign: "center",
              color: "#bcbcbc",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            corrupti reprehenderit qui quo ratione.
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default PriceBox;
