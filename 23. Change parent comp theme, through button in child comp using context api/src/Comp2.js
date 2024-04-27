import ThemeContext from "./ThemeContext";
import { useContext } from "react";

const Comp2 = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: "yellow" }}>
      comp2 having buttons se changing theme value in comp 1 using context api
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default Comp2;
