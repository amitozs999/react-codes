import "./styles.css";

import Parent from "./Parent";
import Child from "./Child";
export default function App() {
  return (
    <Parent>
      {/* //to show child Component
      //extract it from parent props then show it in parent */}
      <Child />
    </Parent>
  );
}
