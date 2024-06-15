import React, { useContext } from "react";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/details";
import { next } from "../features/page";
import { useForm } from "react-hook-form";

import { Controller } from "react-hook-form";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const FormTwo = () => {
  const dispatch = useDispatch();

  const page = useSelector((x) => x.page.pagenumber);
  const details = useSelector((x) => x.details.value);
  //alert(JSON.stringify(details));

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
      otp: details.userOTP || "",
      singleCheckbox: details.singleCheckbox,
      multiCheckbox: {
        option1: details.multiCheckboxoption1,
        option2: details.multiCheckboxoption2,
      },
    },
    mode: "onChange",
  });
  const myotp = watch("otp");
  console.log(myotp);
  const option1val = watch("multiCheckbox.option1");
  const option2val = watch("multiCheckbox.option2");

  const gotonext = (data) => {
    console.log(data);
    if (!data.multiCheckbox.option1 && !data.multiCheckbox.option2)
      return false;
    dispatch(next());

    dispatch(
      info({
        ...details,
        userOTP: data.otp,
        //singleCheckbox: data.singleCheckbox,
        singleCheckbox: data.singleCheckbox,
        multiCheckboxoption1: data.multiCheckbox.option1,
        multiCheckboxoption2: data.multiCheckbox.option2,
      })
    );
  };

  // const  hello=()=>{
  // }

  return (
    <div className="container">
      <p>
        Enter the OTP recieved on your Phone no.{" "}
        {/* <b>{updateContext.userPhone}</b> */}
      </p>
      <img
        className="otpimg"
        src="https://ecall-messaging.com/wp-content/uploads/2020/11/eCall_Illustration_mTAN.svg"
        alt="otp-img"
      />
      <div className="formContain">
        <form className="form">
          <input
            className="formInput"
            placeholder="Enter OTP"
            // type="tel"
            // maxLength="4"
            // minLength="4"

            type="number"
            {...register("otp", {
              required: "OTP is required",
              validate: (cotp) => cotp.length == 4 || "Enter 4 digits",
            })}
            onKeyDown={(e) => {
              if (e.keyCode === 8) {
                return true;
              }
              if (e.keyCode < 48 || e.keyCode > 57 || myotp.length == 4) {
                console.log("hereji");
                //e.stopPropagation();
                e.preventDefault();
                return false;
              }
            }}
          />
          <div>{errors.otp && <span>{errors.otp.message}</span>}</div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>Single Checkbox</h3>
            <FormControlLabel
              control={
                <Controller
                  name="singleCheckbox"
                  control={control}
                  rules={{
                    required: { value: true, message: "Mandatory checkbox" },
                  }}
                  // defaultValue="true"
                  render={({ field: { onChange, value } }) => (
                    <Checkbox onChange={onChange} checked={value} />
                  )}
                />
              }
              label="single option"
            />
          </div>
          <div>
            {errors.singleCheckbox && (
              <span>{errors.singleCheckbox.message}</span>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>Multi Checkbox</h3>
            <FormControlLabel
              control={
                <Controller
                  name="multiCheckbox.option1"
                  control={control}
                  // defaultValue="true"
                  render={({ field: { onChange, value } }) => (
                    <Checkbox onChange={onChange} checked={value} />
                  )}
                />
              }
              label="multi option1"
            />
            <FormControlLabel
              control={
                <Controller
                  name="multiCheckbox.option2"
                  control={control}
                  // defaultValue="true"
                  render={({ field: { onChange, value } }) => (
                    <Checkbox onChange={onChange} checked={value} />
                  )}
                />
              }
              label="multi option2"
            />
          </div>

          <div>
            {!option1val && !option2val && <span>Atleast 1 check karo</span>}
          </div>
          <button
            className="formSubmit"
            value="Next"
            type="submit"
            onClick={handleSubmit(gotonext)}
          >
            Next{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
