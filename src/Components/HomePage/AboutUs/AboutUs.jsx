import React from "react";
import { Stack, Box, Container } from "@mui/material";
import "./About.css";
import aboutImg from "../../../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <Container maxWidth="lg">
        <Stack direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}>
          <Box flex={1}>
            <img src={aboutImg} alt="about" className="about-img" />
          </Box>
          <Box
            flex={1}
            sx={{
              padding: "30px",
            }}
          >
            <p className="about-text">About Us</p>
            <h2 className="about-title">
              WE ARE HERE TO DREAM{" "}
              <font color="black">OUR TEAM IS HERE TO SERVE YOU</font>
            </h2>
            <p className="about-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              consequuntur quisquam qui assumenda repudiandae ipsam eos nisi vel
              incidunt deserunt optio nulla, sunt odit voluptas quia omnis rerum
              earum illo. consequuntur quisquam qui assumenda repudiandae ipsam
              eos nisi vel incidunt deserunt optio nulla, sunt odit voluptas
              quia omnis rerum earum illo.
            </p>
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default AboutUs;
