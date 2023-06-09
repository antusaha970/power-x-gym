import React from "react";
import "./Footer.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FooterList, Typo } from "../../../Styles/Styles";

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: "30px 0",
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Typo variant="h3" component="p">
                POWER-<font color="yellow">X</font>
              </Typo>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={12}>
              <FooterList component="p" variant="p" fontWeight="bold">
                Need Help?
              </FooterList>
              <FooterList component="p" variant="p">
                Help Center
              </FooterList>
              <FooterList component="p" variant="p">
                Email Support
              </FooterList>
              <FooterList component="p" variant="p">
                Live Chat
              </FooterList>
              <FooterList component="p" variant="p">
                Gift Certificate
              </FooterList>
              <FooterList component="p" variant="p">
                Send Us Feedback
              </FooterList>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={12}>
              <FooterList component="p" variant="p" fontWeight="bold">
                Digital Recourses
              </FooterList>
              <FooterList component="p" variant="p">
                Articles
              </FooterList>
              <FooterList component="p" variant="p">
                E-Books
              </FooterList>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={12}>
              <FooterList component="p" variant="p" fontWeight="bold">
                Contact With Us
              </FooterList>
              <FooterList component="p" variant="p">
                Forum
              </FooterList>
              <FooterList component="p" variant="p"></FooterList>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={12}>
              <FooterList component="p" variant="p" fontWeight="bold">
                Join our newsletter
              </FooterList>
              <FooterList component="p" variant="p">
                Get exclusive access to our news, updates, offers and many more
              </FooterList>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="small"
          component="p"
          sx={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          &copy;{new Date().getFullYear()} All Rights Reversed
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
