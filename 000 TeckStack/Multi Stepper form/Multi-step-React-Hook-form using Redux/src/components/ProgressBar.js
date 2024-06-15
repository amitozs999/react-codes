import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/details";
import { next } from "../features/page";

const ProgressBar = () => {
  const dispatch = useDispatch();

  const page = useSelector((x) => x.page.pagenumber);
  const details = useSelector((x) => x.details.value);

  const percent = (page - 1) * 200;
  const percentage = page - 1;

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
