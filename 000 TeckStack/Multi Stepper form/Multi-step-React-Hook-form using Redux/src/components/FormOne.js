import React, { useContext } from "react";
import FormTwo from "./FormTwo";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/details";
import { next } from "../features/page";

import { useForm } from "react-hook-form";

const FormOne = () => {
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
      name: details.userName || "",
      email: details.userMail || "",
      phone: details.userPhone || "",
    },
    mode: "onTouched",
  });

  const myname = watch("name");
  console.log(myname);

  const gotonext = (data) => {
    // alert(JSON.stringify(data));
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    dispatch(next());

    dispatch(
      info({
        ...details,
        userName: data.name,
        userMail: data.email,
        userPhone: data.phone,
      })
    );
  };

  return (
    <div className="contain">
      <p>Enter Your Details</p>
      {/* ca n do below also him sumbit ko id dede */}
      {/* //<form className="form" onSubmit={handleSubmit(gotonext)}> */}
      {/* <input
                    type="submit"
                    value="Submit"
                    className="w-2/3 h-10 rounded-lg bg-red-500 text-white font-semibold  "
                  /> */}
      <form className="form">
        <input
          className="formInput"
          type="text"
          placeholder="Customer Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 5,
              message: "atleast 5 char",
            },
          })}
        />
        <div>{errors.name && <span>{errors.name.message}</span>}</div>
        <input
          className="formInput"
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
        <input
          className="formInput"
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
