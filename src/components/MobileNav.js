import { Link } from "react-router-dom";
import "../styles/MobileNav.scss";
import planets from "../data/planetsData.json";
import MENU from "../images/icon-hamburger.svg";
import CHEVRON from "../images/icon-chevron.svg";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  console.log("open", open);

  const handleToogle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="mobileNav">
      <div className="topbar">
        <Link to="/" className="navlink">
          <p className="title">The planets</p>
        </Link>
        <img
          src={MENU}
          alt="burger menu"
          className="hamburger"
          onClick={handleToogle}
        />
      </div>

      {open && (
        <div className="menu-container">
          {planets.map((planet, id) => (
            <div className="planet-button" key={id}>
              <div className="left-container">
                <div
                  className="circle"
                  style={{ backgroundColor: `${planet.color}` }}
                />
                <Link
                  to={`/:${planet.name}`}
                  className="navlink"
                  key={id}
                  onClick={handleToogle}
                >
                  <p className="name">{planet.name}</p>
                </Link>
              </div>
              <Link to={`/:${planet.name}`} className="navlink" key={id}>
                <img src={CHEVRON} alt="chevron" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
