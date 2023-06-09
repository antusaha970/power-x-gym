import React, { useState, useEffect } from "react";
import { Container, Box, Stack, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import "./callToAction.css";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const iconArray = [FitnessCenterIcon, MonitorHeartIcon, SportsKabaddiIcon];
  const [CurrentIcon, setCurrentIcon] = useState(FitnessCenterIcon);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const iconChange = setInterval(() => {
      setCurrentIcon(iconArray[count]);
      setCount(count + 1);
      if (count === iconArray.length - 1) {
        setCount(0);
      }
    }, 5000);
    return () => {
      // For cleaning you when component unmounts
      clearInterval(iconChange);
    };
  });

  return (
    <main className="main-area">
      <Container maxWidth="lg">
        <Stack direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}>
          <Box flex={1}>
            <h1 className="head-title">THE BEST FITNESS STUDIO IN TOWN</h1>
            <p className="head-text">
              Welcome to Power-X-Gym, the ultimate destination for fitness
              enthusiasts who are passionate about achieving their fitness goals
              and transforming their lives. At Power-X-Gym, we believe that
              fitness is not just a goal, but a way of life. Our
              state-of-the-art facility is equipped with the latest fitness
              equipment and cutting-edge technology to help you get the most out
              of your workout. Our team of certified trainers are dedicated to
              helping you reach your fitness goals and push your limits.
            </p>
            <button className="btn-brand cta-btn">
              <Link to="/classSchedule">JOIN US</Link>
            </button>
          </Box>
          <Box
            flex={1}
            display={{ lg: "block", md: "block", sm: "block", xs: "none" }}
          >
            <CurrentIcon
              sx={{
                color: "white",
                fontSize: "300px",
                display: "block",
                margin: "auto",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </main>
  );
};

export default CallToAction;
