import "./Example8.scss";
import { useState } from "react";

const Example8 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div style={{ height: "400px", backgroundColor: "grey" }}>
      <nav className="navbar-container">
        <div className="nav-logo">Logo</div>

        <ul className={click ? "navbar-items-phone" : "navbar-items"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* {click && (
          <ul className="navbar-items-phone">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        )} */}

        <div className="hamburger" onClick={handleClick}>
          ☰
        </div>
      </nav>
    </div>
  );
};

export default Example8;
