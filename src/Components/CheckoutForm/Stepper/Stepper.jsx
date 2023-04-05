import React from "react";
import "./Stepper.css";
import { Container } from "@mui/material";

const Stepper = () => {
  return (
    <Container maxWidth="md">
      <div className="line-container">
        <div className="stapes-container">
          <p className="stapes active" title="Personal Details">
            1
          </p>
          <p className="stapes" title="Bank Details">
            2
          </p>
          <p className="stapes" title="Confirm Membership">
            3
          </p>
        </div>
        <div className="line"></div>
      </div>
    </Container>
  );
};

export default Stepper;
