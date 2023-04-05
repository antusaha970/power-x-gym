import React from "react";
import "./TopHeader.css";
import NavBar from "../../HomePage/NavBar/NavBar";
import { Typography } from "@mui/material";

const TopHeader = ({ title, fontSize }) => {
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
          fontSize: `${fontSize}`,
        }}
      >
        {title}
      </Typography>
    </section>
  );
};

export default TopHeader;
