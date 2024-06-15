import * as xobj from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <h1 className="myclasspuppy">Amitoz Singh violet</h1>
      <h1 className="myclassorange">Amitoz Singh orange</h1>
      <h1 className="myclassgreen">Amitoz Singh green </h1>

      <h1 className="myclassgreen hideinlaptop ">Hide in laptop </h1>

      <h1 className={`${xobj.localcolorclass}`}>Local css wala </h1>

      {/* <h1 className={xobj.localcolorclass} > Local css wala </h1> */}
    </>
  );
};

export default Header;
