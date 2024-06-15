import React, { useContext } from "react";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/details";
import { next } from "../features/page";
import { useForm } from "react-hook-form";
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
    },
    mode: "onTouched",
  });
  const myotp = watch("otp");
  console.log(myotp);
  const gotonext = (data) => {
    dispatch(next());

    dispatch(
      info({
        ...details,
        userOTP: data.otp,
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
