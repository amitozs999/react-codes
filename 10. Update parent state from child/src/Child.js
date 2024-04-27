import { useState } from "react";
const Child = ({ setValue }) => {
  return (
    <>
      <div>Child</div>
      {/* //on click send updated value to child though useState setter */}
      <button onClick={() => setValue("Parent has been updated! from child")}>
        Change Parent Value
      </button>
    </>
  );
};
export default Child;
