import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import {
  Container,
  Box,
  Typography,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  listItemButtonClasses,
} from "@mui/material";
import "./PriceBox.css";
import price1 from "../../../assets/images/service1-min.jpg";
import price2 from "../../../assets/images/service2-min.jpg";
import price3 from "../../../assets/images/service3-min.jpg";
import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";

const pricingData = [
  {
    title: "Advance Plan",
    price: "140",
    img: price1,
    listOfParks: [
      "All Access",
      "Personal Trainer",
      "Free WIFI",
      "Free Suplements",
    ],
  },
  {
    title: "Basic Plan",
    price: "120",
    img: price2,
    listOfParks: [
      "All Access",
      "Personal Trainer",
      "Free WIFI",
      "Free Suplements",
    ],
  },
  {
    title: "Beginners Plan",
    price: "90",
    img: price3,
    listOfParks: [
      "All Access",
      "Personal Trainer",
      "Free WIFI",
      "Free Suplements",
    ],
  },
];

const PriceBox = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: "40px 0",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
              paddingBottom: "10px",
            }}
          >
            <font color="#FCD842">Choose the Offer</font> that Suits you
          </Typography>
          <Typography
            variant="small"
            component="p"
            sx={{
              textAlign: "center",
              color: "#bcbcbc",
            }}
          >
            Power X Gym offers three different pricing plans to cater to
            different fitness goals and budgets. The Basic Plan starts at
            $120/month and includes access to all basic gym equipment and
            facilities, as well as a personal fitness consultation. The Advance
            Plan starts at $140/month and includes everything in the Advanced
            Plan, as well as access to specialized equipment, priority booking
            for classes and training sessions, and a nutrition consultation. No
            matter which plan you choose, Power X Gym is committed to helping
            you achieve your fitness goals in a supportive and empowering
            environment.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "40px 0",
          }}
        >
          <Grid container spacing={2}>
            {pricingData?.map((price) => (
              <Grid item lg={4} md={4} sm={6} xs={12} key={price.title}>
                <Box
                  sx={{
                    height: "500px",
                    width: "100%",
                    backgroundImage: `url(${price.img})`,
                    backgroundSize: "cover",
                  }}
                >
                  <Box
                    sx={{
                      padding: "30px",
                    }}
                  >
                    <Typography
                      variant="small"
                      component="p"
                      sx={{
                        color: "#FCD842",
                        textAlign: "center",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      Billed Monthly
                    </Typography>
                    <Typography
                      variant="h5"
                      component="p"
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: "40px",
                      }}
                    >
                      {price.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="p"
                      sx={{
                        color: "#FCD842",
                        textAlign: "center",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: "40px",
                      }}
                    >
                      ${price.price}
                    </Typography>

                    <List component="ul">
                      {price.listOfParks.map((list) => (
                        <ListItemButton key={list}>
                          <ListItemIcon>
                            <CheckIcon
                              sx={{
                                color: "#fff",
                              }}
                            />
                          </ListItemIcon>
                          <Typography
                            variant="small"
                            component="p"
                            sx={{
                              color: "#fff",
                              fontWeight: "bold",
                              fontSize: "24px",
                              textAlign: "center",
                            }}
                          >
                            {list}
                          </Typography>
                        </ListItemButton>
                      ))}
                    </List>
                  </Box>

                  <Link
                    to={`/checkout?plan=${price.title}`}
                    className="link-format"
                  >
                    <button className="btn-brand purchase-btn">PURCHASE</button>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default PriceBox;
