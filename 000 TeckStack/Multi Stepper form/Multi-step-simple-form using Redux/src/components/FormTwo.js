import React, { useContext } from "react";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/details";
import { next } from "../features/page";

const FormTwo = () => {
  const dispatch = useDispatch();

  const page = useSelector((x) => x.page.pagenumber);
  const details = useSelector((x) => x.details.value);
  //alert(JSON.stringify(page));
  const [otpinfo, setOtp] = useState({
    otp: details.userOTP || "",
  });

  const gotonext = () => {
    if (otpinfo.otp == null || otpinfo.otp.length !== 4) {
      console.log("Please enter the OTP correctly");
    } else {
      dispatch(next());

      dispatch(
        info({
          ...details,
          userOTP: otpinfo.otp,
        })
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp({
      ...otpinfo,
      [name]: value,
    });
  };
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
            type="text"
            maxLength="4"
            name="otp"
            placeholder="Enter OTP"
            onChange={handleChange}
            required
          />
          <button
            className="formSubmit"
            value="Next"
            type="submit"
            onClick={gotonext}
          >
            Next{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
