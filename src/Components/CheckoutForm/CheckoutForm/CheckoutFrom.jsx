import { Container, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="from-box">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName", { required: true })}
                  className="form-input"
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="from-box">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName", { required: true })}
                  className="form-input"
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="from-box">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="firstName"
                  type="email"
                  {...register("email", { required: true })}
                  className="form-input"
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="from-box">
                <label htmlFor="MobileNum" className="form-label">
                  Mobile Number
                </label>
                <input
                  id="MobileNum"
                  type="tel"
                  {...register("mobileNumber", { required: true })}
                  className="form-input"
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="from-box">
                <label htmlFor="Address" className="form-label">
                  Address Line 1
                </label>
                <input
                  id="Address"
                  type="text"
                  {...register("address")}
                  className="form-input"
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="from-box">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  {...register("city")}
                  className="form-input"
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="from-box">
                <label htmlFor="postal" className="form-label">
                  Post Code
                </label>
                <input
                  id="postal"
                  type="number"
                  {...register("postal")}
                  className="form-input"
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="from-box">
                <label htmlFor="zipCode" className="form-label">
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  type="number"
                  {...register("zipCode", { required: true })}
                  className="form-input"
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <>
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select {...field} labelId="gender" label="Gender">
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Custom">Custom</MenuItem>
                    </Select>
                  </>
                )}
              />
            </Grid>
          </Grid>
          <button type="submit" className="btn-brand">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default CheckoutForm;
