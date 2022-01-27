import { Link } from "react-router-dom";
import "../styles/MobileNav.scss";
// import planets from "../data.json";

const MobileNav = () => {
  return (
    <div className="mobileNav">
      <Link to="/" className="navlink">
        <p className="title">The planets</p>
      </Link>
      <div className="nav">
        {/* {planets.map((planet, id) => (
          <Link to={`/:${planet.name}`} className="navlink" key={id}>
            <li>{planet.name}</li>
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default MobileNav;
