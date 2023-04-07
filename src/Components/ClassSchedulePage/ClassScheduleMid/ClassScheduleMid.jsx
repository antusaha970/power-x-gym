import {
  Box,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import "./ClassSchedulemid.css";
import classImg from "../../../assets/images/class4-min.jpg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Link } from "react-router-dom";

const listData = [
  { title: "Having Slimmer Shaper Thing" },
  { title: "Getting Stronger Body" },
  { title: "Increased Metabolism" },
  { title: "Increased Muscular Endurance" },
  { title: "Maximum Result In Less Time" },
  { title: "Firm Hips and Tummy" },
];

const timeData = [
  { day: "Saturday", time: "7:00AM - 8:00PM" },
  { day: "Monday", time: "7:00AM - 8:00PM" },
  { day: "Tuesday", time: "7:00AM - 8:00PM" },
  { day: "Wednesday", time: "10:00AM - 8:00PM" },
  { day: "Thursday", time: "7:00AM - 12:00PM" },
  { day: "Friday", time: "6:00AM - 8:00PM" },
];

const ClassScheduleMid = () => {
  return (
    <section className="classSchedule">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box>
              <img src={classImg} alt="class" className="classImg" />
            </Box>
            <Typography
              variant="p"
              component="p"
              sx={{
                color: "#8d8d8d",
                padding: "10px 0",
              }}
            >
              At Power-X-Gym, we understand that everyone is unique, which is
              why we offer customized fitness programs tailored to your specific
              needs and goals. Our friendly and supportive community of members
              will help keep you motivated and on track towards achieving your
              goals. Join us today and discover the Power-X-Gym difference. Let
              us help you unlock your true potential and become the best version
              of yourself!
            </Typography>
            <Box>
              <List component="ul">
                {listData.map((data) => (
                  <ListItemButton>
                    <ListItemIcon>
                      <CheckBoxIcon
                        sx={{
                          color: "#FCD842",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={data.title} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              <font color="#FCD842">CLASS</font> SCHEDULE
            </Typography>
            <Grid container spacing={2}>
              {timeData.map((time) => (
                <Grid item lg={6} md={6} sm={6} xs={6} key={time.day}>
                  <div className="time-box">
                    <Typography variant="h5" component="p">
                      {time.day}
                    </Typography>
                    <Typography
                      variant="small"
                      component="p"
                      sx={{
                        color: "#FCD842",
                      }}
                    >
                      {time.time}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                marginTop: "20px",
              }}
            >
              <button className="btn-brand cta-btn">
                <Link to="/pricing">JOIN US</Link>
              </button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ClassScheduleMid;
