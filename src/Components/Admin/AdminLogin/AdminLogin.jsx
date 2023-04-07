import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const AdminLogin = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h4"
          sx={{
            textAlign: "center",
            padding: "20px",
            color: "gold",
            fontWeight: "bold",
            fontSize: "38px",
          }}
        >
          Login to admin panel
        </Typography>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              )}
            />
            <button type="submit">submit</button>
          </form>
        </Box>
      </Container>
    </section>
  );
};

export default AdminLogin;
