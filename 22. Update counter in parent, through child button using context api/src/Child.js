import React, { useContext } from "react";
import CountContext from "./CountContext";

const Child = () => {
  //usecontext  se use karo jo context provided to child comp
  // retrieve values and call them on button click
  const context = useContext(CountContext);
  const { countHandler } = context;

  return (
    <div>
      {/* //jesi hi click will call handler of parent comp */}
      <button onClick={countHandler}>Increment</button>
    </div>
  );
};
export default Child;
