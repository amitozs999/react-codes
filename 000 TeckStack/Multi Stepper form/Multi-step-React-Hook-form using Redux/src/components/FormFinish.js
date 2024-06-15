import React, { useContext } from "react";
import "./styles.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/details";
import { next } from "../features/page";

const FormFinish = () => {
  const page = useSelector((x) => x.page.pagenumber);
  const details = useSelector((x) => x.details.value);
  alert(JSON.stringify(details));

  const finish = () => {
    console.log(details);
  };
  return (
    <div className="container">
      <p>Successfully Submitted</p>
      <p>Thanks for {name} your details</p>
      <img
        className="done"
        src="https://www.svgrepo.com/show/13650/success.svg"
        alt="successful"
      />
      <button className="doneSubmit" onClick={finish}>
        Done
      </button>
    </div>
  );
};

export default FormFinish;
