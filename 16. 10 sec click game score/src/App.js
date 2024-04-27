import "./styles.css";

import { useState } from "react";
import { useEffect } from "react";

import { useRef } from "react";

export default function App() {
  const [countscore, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  var id = useRef(null);

  //decrease time by 1 sec after each 1 second
  useEffect(() => {
    id = setInterval(() => {
      setTimeLeft((time) => {
        if (time === 0) {
          return 0;
        } else {
          return time - 1;
        }
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="App">
      <h1>{countscore}</h1>
      <h3>Time left: {timeLeft} seconds</h3>

      {timeLeft === 0 ? null : (
        <button onClick={() => setCount((prevc) => prevc + 1)}>+</button>
      )}
    </div>
  );
}
