import React, { useContext } from "react";
import FormTwo from "./FormTwo";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/details";
import { next } from "../features/page";

const FormOne = () => {
  const dispatch = useDispatch();

  const page = useSelector((x) => x.page.pagenumber);
  const details = useSelector((x) => x.details.value);
  //alert(JSON.stringify(details));
  const [perinfo, setPer] = useState({
    name: details.userName || "",
    email: details.userMail || "",
    phone: details.userPhone || "",
  });

  const gotonext = () => {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if (perinfo.name == null) {
      console.log("Please enter your Name");
    } else if (perinfo.email == null || regex.test(perinfo.email) !== true) {
      console.log("Please enter your email correctly");
    } else if (perinfo.phone == null || perinfo.phone.length !== 10) {
      console.log("Please enter your phone number correctly");
    } else {
      dispatch(next());

      dispatch(
        info({
          ...details,
          userName: perinfo.name,
          userMail: perinfo.email,
          userPhone: perinfo.phone,
        })
      );
    }
  };

  // form values onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPer({
      ...perinfo,
      [name]: value,
    });
  };

  return (
    <div className="contain">
      <p>Enter Your Details</p>
      <form className="form">
        <input
          className="formInput"
          type="text"
          placeholder="Customer Name"
          value={perinfo.name}
          onChange={(e) => setPer({ ...perinfo, name: e.target.value })}
          required
        />
        <input
          className="formInput"
          type="email"
          placeholder="Email Id"
          value={perinfo.email}
          onChange={(e) => setPer({ ...perinfo, email: e.target.value })}
          required
        />
        <input
          className="formInput"
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={perinfo.phone}
          maxLength="10"
          onChange={handleChange}
          //setPer({ ...perinfo, phone: e.target.value });
          required
        />
        <button type="button" className="formSubmit" onClick={gotonext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default FormOne;
