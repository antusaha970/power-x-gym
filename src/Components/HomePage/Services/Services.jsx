import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import "./Services.css";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import bg1 from "../../../assets/images/service1-min.jpg";
import bg2 from "../../../assets/images/service2-min.jpg";
import bg3 from "../../../assets/images/service3-min.jpg";
import serviceIcon1 from "../../../assets/images/serviceIcon1.png";
import serviceIcon2 from "../../../assets/images/serviceIcon2.png";
import serviceIcon3 from "../../../assets/images/serviceIcon3.png";

const serviceData = [
  {
    img: bg1,
    title: "PROGRESSION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo repellat odit fuga ipsam incidunt blanditiis. Nemo repellat odit fuga ipsam incidunt blanditiis.",
    icon: serviceIcon1,
  },
  {
    img: bg2,
    title: "WORKOUT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo repellat odit fuga ipsam incidunt blanditiis. Nemo repellat odit fuga ipsam incidunt blanditiis.",
    icon: serviceIcon2,
  },
  {
    img: bg3,
    title: "NUTRITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo repellat odit fuga ipsam incidunt blanditiis. Nemo repellat odit fuga ipsam incidunt blanditiis.",
    icon: serviceIcon3,
  },
];
const Services = () => {
  const BGImageBase = styled("div")(({ bgImage }) => ({
    backgroundImage: bgImage,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "350px",
  }));

  return (
    <section className="services">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {serviceData.map((service) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={service.title}>
              <BGImageBase bgImage={`url(${service.img})`}>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: "15px",
                    paddingTop: "25px",
                  }}
                >
                  <img
                    src={service.icon}
                    alt="service"
                    className="service-icon"
                  />
                  <Typography
                    variant="h4"
                    component="h5"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      padding: "10px 0",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: "white",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Stack>
              </BGImageBase>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
