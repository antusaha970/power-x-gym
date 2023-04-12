import React from "react";
import TopHeader from "../Shared/TopHeader/TopHeader";
import Footer from "../Shared/Footer/Footer";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { client } from "../../Api/Client";

const ContactUs = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      const result = await client.post("/userMessage", data);
      if (result.data) {
        alert(
          "Thank you for contacting with us. \n We will get back to you very soon"
        );
        reset();
      }
    } catch (error) {
      alert(error);
      console.log(error);
      window.location.reload();
    }
  };
  return (
    <>
      <TopHeader title="Feel Free to contact us" fontSize="45px" />
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          component="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "40px",
            textTransform: "uppercase",
            padding: "20px 0",
          }}
        >
          Send us your <font color="#FCD842">query</font>
        </Typography>
        <Box
          sx={{
            margin: "30px",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="email"
                  label="Enter Your Email"
                  variant="standard"
                  margin="normal"
                  fullWidth
                  type="email"
                />
              )}
            />
            {errors.email && (
              <Typography variant="small" component="small" color="red">
                Email is required
              </Typography>
            )}
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="email"
                  label="Please write your message"
                  variant="standard"
                  margin="normal"
                  multiline={true}
                  rows={5}
                  fullWidth
                />
              )}
            />
            {errors.message && (
              <Typography variant="small" component="small" color="red">
                Message is required
              </Typography>
            )}
            <br />
            <br />
            <Button variant="contained" color="warning" type="submit">
              Send
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
