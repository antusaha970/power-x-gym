import React from "react";
import "./TopHeader.css";
import NavBar from "../../HomePage/NavBar/NavBar";
import { Typography } from "@mui/material";

const TopHeader = ({ title }) => {
  return (
    <section className="topHeader">
      <NavBar />
      <Typography
        variant="h2"
        component="h2"
        textAlign="center"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          paddingTop: "10%",
        }}
      >
        {title}
      </Typography>
    </section>
  );
};

export default TopHeader;
