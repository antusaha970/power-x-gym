import React from "react";
import { Container, Box, Stack, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./callToAction.css";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <main className="main-area">
      <Container maxWidth="lg">
        <Stack direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}>
          <Box flex={1}>
            <h1 className="head-title">THE BEST FITNESS STUDIO IN TOWN</h1>
            <p className="head-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              repellat odit fuga ipsam incidunt blanditiis.. Nemo repellat odit
              fuga ipsam incidunt blanditiis.. Nemo repellat odit fuga ipsam
              incidunt blanditiis.
            </p>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button className="btn-brand cta-btn">JOIN US</button>
            </motion.div>
          </Box>
          <Box
            flex={1}
            display={{ lg: "block", md: "block", sm: "block", xs: "none" }}
          >
            <FitnessCenterIcon
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
