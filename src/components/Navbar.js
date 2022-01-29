import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
import planets from "../data.json";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navlink">
        <p className="title">The planets</p>
      </Link>
      <div className="nav">
        {planets.map((planet, id) => (
          <NavLink to={`/:${planet.name}`} className="navlink" key={id}>
            <li>{planet.name}</li>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
