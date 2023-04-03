import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "./WhyChooseUs.css";
import pic1 from "../../../assets/images/choose1.png";
import pic2 from "../../../assets/images/choose2.png";
import pic3 from "../../../assets/images/choose3.png";

const whyToChooseUsData = [
  {
    img: pic1,
    title: "FREE FITNESS TRANNIG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo repellat odit fuga ipsam incidunt blanditiis. Nemo repellat odit fuga ipsam incidunt blanditiis.",
  },
  {
    img: pic2,
    title: "TONS OF CARDIO & STRENGTH ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo repellat odit fuga ipsam incidunt blanditiis. Nemo repellat odit fuga ipsam incidunt blanditiis.",
  },
  {
    img: pic3,
    title: "NO COMMITMENT MEMBERSHIP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo repellat odit fuga ipsam incidunt blanditiis. Nemo repellat odit fuga ipsam incidunt blanditiis.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="choose-us">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          sx={{
            fontWeight: "bold",
          }}
        >
          <font color="#FCD842">WHY</font> CHOOSE US
        </Typography>
        <Grid container spacing={2}>
          {whyToChooseUsData.map((data) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={data.title}>
              <div className="boader">
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: "15px",
                    paddingTop: "25px",
                    textAlign: "center",
                  }}
                >
                  <img src={data.img} alt="service" className="service-icon" />
                  <Typography
                    variant="h4"
                    component="h5"
                    sx={{
                      fontWeight: "bold",
                      padding: "10px 0",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography variant="p" component="p">
                    {data.description}
                  </Typography>
                </Stack>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
