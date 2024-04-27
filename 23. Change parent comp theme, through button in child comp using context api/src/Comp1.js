import ThemeContext from "./ThemeContext";

import { useContext } from "react";

const Comp1 = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1>comp1 me now ye wala theme he : {theme}</h1>
    </div>
  );
};

export default Comp1;
