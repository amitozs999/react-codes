import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Bar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <div className="header">
      <div className="nav container">
        <Link to="/" className="nav__logo">
          Navigation Bar
        </Link>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/news" className="nav__link">
                News
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/location" className="nav__link">
                Location
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/get-started" className="nav__link nav__cta">
                Get Started
              </Link>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </div>
    </div>
  );
};

export default Bar;
