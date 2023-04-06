import React from "react";
import "./Stepper.css";
import { Container } from "@mui/material";

const Stepper = ({ step }) => {
  let activeClass1;
  let activeClass2;
  let activeClass3;
  if (step === 1) {
    activeClass1 = "active";
  } else if (step === 2) {
    activeClass1 = "active";
    activeClass2 = "active";
  } else {
    activeClass1 = "active";
    activeClass2 = "active";
    activeClass3 = "active";
  }
  return (
    <Container maxWidth="md">
      <div className="line-container">
        <div className="stapes-container">
          <p className={`stapes ${activeClass1}`} title="Personal Details">
            1
          </p>
          <p className={`stapes ${activeClass2}`} title="Bank Details">
            2
          </p>
          <p className={`stapes ${activeClass3}`} title="Confirm Membership">
            3
          </p>
        </div>
        <div className="line"></div>
      </div>
    </Container>
  );
};

export default Stepper;
