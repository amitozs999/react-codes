import React, { useState } from "react";
import "./styles.css";

import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormFinish from "./FormFinish";
import ProgressBar from "./ProgressBar";

import { useDispatch, useSelector } from "react-redux";

const StepForm = () => {
  const dispatch = useDispatch();

  const page = useSelector((x) => x.page.pagenumber);
  const details = useSelector((x) => x.details.value);
  //alert(JSON.stringify(details));

  return (
    <div className="main">
      <div className="navbar">
        <img
          src="https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg"
          alt="logo"
        />
      </div>
      {/* all under body will be flexed and vertically */}
      <div className="body">
        <h3>Multi Step Form using ReactJS</h3>
        <div className="wrapper">
          <ProgressBar />
          {page === 1 && <FormOne />}
          {page === 2 && <FormTwo />}
          {page === 3 && <FormFinish />}
        </div>
      </div>
    </div>
  );
};

export default StepForm;
