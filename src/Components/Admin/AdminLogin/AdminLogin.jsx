import { AccountCircle, Email, Lock } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { client } from "../../../Api/Client";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigation = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await client.post("/isAdmin", data);
      if (response.data) {
        navigation("/admin/dashboard/menu");
      } else {
        alert("Wrong email or password");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-basic"
                  label="Enter admin Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            {errors.email && (
              <Typography variant="small" component="small" color="error">
                This field is required
              </Typography>
            )}
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-basic-pass"
                  label="Enter admin password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            {errors.password && (
              <Typography
                variant="small"
                component="small"
                color="error"
                sx={{
                  display: "block",
                }}
              >
                This field is required
              </Typography>
            )}
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
};

export default AdminLogin;
