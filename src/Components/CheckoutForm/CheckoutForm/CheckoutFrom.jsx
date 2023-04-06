import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./CheckoutForm.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormState } from "../Checkout/Checkout";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const [gender, setGender] = useState("");
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");
  const navigation = useNavigate();
  const [formData, setFormData] = useContext(FormState);
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const onSubmit = (data) => {
    data = { ...data, gender, plan };
    setFormData(data);
    console.log(formData);
    navigation("/checkout/step2");
  };
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
                  {...register("mobileNumber", {
                    required: true,
                    minLength: 11,
                  })}
                  className="form-input"
                />
                {errors.mobileNumber && (
                  <Typography variant="span" component="p">
                    Please Enter a valid mobile number
                  </Typography>
                )}
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControl
                fullWidth
                sx={{
                  width: "80%",
                }}
              >
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="genderSelect"
                  value={gender}
                  label="Gender"
                  onChange={handleGenderChange}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"custom"}>Custom</MenuItem>
                </Select>
              </FormControl>
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
          </Grid>
          <button type="submit" className="btn-brand submit-btn">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default CheckoutForm;
