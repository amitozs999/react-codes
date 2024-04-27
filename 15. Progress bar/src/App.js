import "./styles.css";

import { useState } from "react";

import ProgressBar from "./ProgressBar";

export default function App() {
  const [val, setVal] = useState(40);

  const setValuer = (e) => {
    setVal(Number(e.target.value));
  };

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar inputWidth={val} />
        <form>
          <label for="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
