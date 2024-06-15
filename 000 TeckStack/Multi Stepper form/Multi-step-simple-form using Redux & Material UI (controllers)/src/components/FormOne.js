import React, { useContext } from "react";
import FormTwo from "./FormTwo";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/details";
import { next } from "../features/page";

import { useForm } from "react-hook-form";

import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";

import { TextField } from "@mui/material";

const FormOne = () => {
  // const { control } = useFormContext();

  const dispatch = useDispatch();

  const page = useSelector((x) => x.page.pagenumber);
  const details = useSelector((x) => x.details.value);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setValue,
    control,
  } = useForm({
    defaultValues: {
      myname: details.userName || "",
      email: details.userMail || "",
      phone: details.userPhone || "",
    },
    mode: "onChange",
  });

  const myname = watch("myname");
  console.log(myname);

  const gotonext = (data) => {
    // alert(JSON.stringify(data));
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    dispatch(next());

    dispatch(
      info({
        ...details,
        userName: data.myname,
        userMail: data.email,
        userPhone: data.phone,
      })
    );
  };

  return (
    <div className="contain">
      <p>Enter Your Details</p>

      <form className="form">
        <Controller
          name="myname"
          control={control}
          // rules={{ required: "Invalid input" }}
          rules={{
            required: { value: true, message: "invalid name" },
            minLength: {
              value: 5,
              message: "atleast 5 char",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              helperText={errors.myname ? errors.myname.message : null}
              size="small"
              placeholder="Customer Name"
              //error={!!error}
              onChange={onChange}
              value={value}
              fullWidth
              variant="outlined"
            />
          )}
        />
        <div>{errors.myname && <span>{errors.myname.message}</span>}</div>
        <TextField
          helperText={errors.email ? errors.email.message : null}
          type="email"
          placeholder="Email Id"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/i,
              message: "valid mail enter karo",
            },
          })}
        />

        <div>{errors.email && <span>{errors.email.message}</span>}</div>
        <TextField
          helperText={errors.phone ? errors.phone.message : null}
          type="text"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Phone is required",
            validate: (cphone) => cphone.length == 10 || "Enter 10 digits",
          })}
        />
        <div>{errors.phone && <span>{errors.phone.message}</span>}</div>

        <button
          type="button"
          className="formSubmit"
          onClick={handleSubmit(gotonext)}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default FormOne;
