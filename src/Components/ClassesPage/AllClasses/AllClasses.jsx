import { Box, Container, Grid } from "@mui/material";
import React from "react";
import "./AllCLasses.css";
import img1 from "../../../assets/images/class1-min.jpg";
import img2 from "../../../assets/images/class2-min.png";
import img3 from "../../../assets/images/class3-min.jpg";
import img4 from "../../../assets/images/class4-min.jpg";
import img5 from "../../../assets/images/class5-min.jpg";
import img6 from "../../../assets/images/class6-min.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const allClassesData = [
  {
    img: img1,
    title: "Psycho Training",
  },
  {
    img: img2,
    title: "Self Defense",
  },
  {
    img: img3,
    title: "Advance Gym",
  },
  {
    img: img4,
    title: "Cardio Training",
  },
  {
    img: img5,
    title: "Strength Training",
  },
  {
    img: img6,
    title: "Body Mass Training",
  },
];

const AllClasses = () => {
  return (
    <section className="allClasses">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {allClassesData?.map((singleClassData) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={singleClassData.title}>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <img
                    src={singleClassData.img}
                    alt="class"
                    className="classImg"
                  />
                  <div className="btn-brand class-btn">
                    <Link to="/classSchedule">
                      <p>{singleClassData.title} </p>
                    </Link>
                  </div>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default AllClasses;
