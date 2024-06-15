import React, { useState } from "react";
import "./styles.css";
import FormContext from "./FormContext";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormFinish from "./FormFinish";
import ProgressBar from "./ProgressBar";

const StepForm = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [otp, setOTP] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [value, setValue] = useState(null);
  const [dob, setDOB] = useState(null);
  const [issue, setIssue] = useState(null);
  const [company, setCompany] = useState(null);

  const userDetails = {
    currentPage: step,
    userName: name,
    userMail: email,
    userPhone: phone,
    userOTP: otp,
    vehBrand: brand,
    userVehicle: model,
    vehYear: year,
    vehValue: value,
    userDOB: dob,
    issueDate: issue,
    companyName: company,
    setName,
    setEmail,
    setPhone,
    setStep,
    setOTP,
    setBrand,
    setModel,
    setYear,
    setValue,
    setDOB,
    setIssue,
    setCompany,
  };

  return (
    <FormContext.Provider value={{ userDetails }}>
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
            {step === 0 && <FormOne />}
            {step === 1 && <FormTwo />}
            {step === 2 && <FormFinish />}
          </div>
        </div>
      </div>
    </FormContext.Provider>
  );
};

export default StepForm;
