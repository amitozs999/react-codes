import React, { useContext } from "react";
import FormContext from "./FormContext";

const ProgressBar = () => {
  const myContext = useContext(FormContext);
  const updateContext = myContext.userDetails;

  const percent = updateContext.currentPage * 200;
  const percentage = updateContext.currentPage;

  const background = {
    backgroundColor: "#dee2e6",
    height: 8,
    width: 400,
    borderRadius: 20,
  };

  const progress = {
    backgroundColor: "#43aa8b",
    height: 8,
    width: percent,
    borderRadius: 20,
  };

  const text = {
    fontSize: 12,
    color: "#8d99ae",
  };

  return (
    <div>
      <p style={text}>{percentage} of 2 completed</p>
      <div style={background}>
        <div style={progress}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
