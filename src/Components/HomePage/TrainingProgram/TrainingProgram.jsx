import React from "react";
import "./TrainingProgram.css";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import program1 from "../../../assets/images/program1.png";
import program2 from "../../../assets/images/program2.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const programsData = [
  {
    img: program1,
    text: "YOGA TRAINING SESSION",
  },
  {
    img: program2,
    text: "CARDIO TRAINING SESSION",
  },
];

const TrainingProgram = () => {
  return (
    <section className="training-program">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          TRAINING <font color="#FCD842">PROGRAM</font>
        </Typography>
        <Grid container spacing={2}>
          {programsData.map((program) => (
            <Grid item lg={6} md={6} sm={12} xs={12} key={program.text}>
              <div className="program-container">
                <img src={program.img} alt="program" className="program-img" />
                <div className="btn-brand program-btn">
                  {program.text} <ArrowForwardIcon />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default TrainingProgram;
