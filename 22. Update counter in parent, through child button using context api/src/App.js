import "./styles.css";

import CountContext from "./CountContext";
import { useState } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    //using countcontext.provider  to send/provide values to child component
    // then can useContext in child to retrieve these values

    <CountContext.Provider value={{ countHandler }}>
      <h2>{count}</h2>
      {/* //provide child comp these values */}
      <Child />
    </CountContext.Provider>
  );
}
