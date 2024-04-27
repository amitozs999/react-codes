import "./styles.css";
import Child from "./Child";
import { useState } from "react";

export default function App() {
  const [parValue, setValue] = useState("I need to be updated from my child");

  return (
    <>
      <h3>Update Parent State parValue(Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{parValue}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue} />
        {/* //is value ka setter pass in child joki vha se update bhejega */}
      </div>
    </>
  );
}
