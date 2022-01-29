import { Link } from "react-router-dom";
import "../styles/HomePage.scss";
import PlanetsfactsCard from "./PlanetsfactsCard";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="links-container">
        <Link to="/:earth" className="navlink">
          <PlanetsfactsCard />
        </Link>
        <Link to="/:earth" className="navlink">
          <PlanetsfactsCard />
        </Link>
        <Link to="/:earth" className="navlink">
          <PlanetsfactsCard />
        </Link>
        <Link to="/:earth" className="navlink">
          <PlanetsfactsCard />
        </Link>
        <Link to="/:earth" className="navlink">
          <PlanetsfactsCard />
        </Link>

      </div>
    </div>
  );
};

export default HomePage;
