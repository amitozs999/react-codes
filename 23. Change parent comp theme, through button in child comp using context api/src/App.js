import "./styles.css";

import ThemeContext from "./ThemeContext";
import { useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme == "light" ? `lightcn` : `darkcn`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Comp1 />
        <Comp2 />
      </ThemeContext.Provider>
    </div>
  );
}
