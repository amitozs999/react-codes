import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [timeleft, setTimeLeft] = useState(0); //seconds

  const [isActive, setIsActive] = useState(false); //watch running or not

  useEffect(() => {
    //save intervalId to clear the interval when the component re-renders
    //update timeleft after each sec

    let intervalId;
    //setInterval(()=>{ } , 1000);
    if (isActive) {
      intervalId = setInterval(() => {
        setTimeLeft((prevtime) => {
          if (timeleft > 0) {
            return prevtime - 1;
          } else {
            setIsActive(false);
            return 0;
          }
        });
      }, 1000);
    }

    //// clear interval on re-render to avoid memory leaks

    return () => clearInterval(intervalId);
  }, [isActive]);

  function handleStart() {
    setTimeLeft(5400);
    setIsActive(true);
  }

  function handleStop() {
    setIsActive(false);
    setTimeLeft(0);
  }

  function handlePauseResume() {
    setIsActive((prevstate) => !prevstate);
  }
  

  function formatTime(timeleft) {
    //i hour=3600sec
    // hours = totalSecs / 3600;
    // minutes = (totalSecs % 3600) / 60;
    // seconds = totalSecs % 60;

    const hours = Math.floor(timeleft / 3600)
      .toString()
      .padStart(2, "0"); // Pad a string with "0" until it reaches the length 2

    const minutes = Math.floor((timeleft % 3600) / 60)
      .toString()
      .padStart(2, "0");

    const seconds = (timeleft % 60).toString().padStart(2, "0");

    return `${hours}  :  ${minutes}  :  ${seconds}`;
  }

  return (
    <div>
      <p>{formatTime(timeleft)} </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePauseResume}>
        {isActive ? "Pause" : "Resume"}
      </button>

      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
export default StopWatch;
