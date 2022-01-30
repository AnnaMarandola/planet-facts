import { Link } from "react-router-dom";
import "../styles/PlanetsfactsCard.scss";

const PlanetsfactsCard = () => {
  return (
    <div className="link-card">
      <div className="border">
        <h1 className="cardTitle">planets facts</h1>
        <div className="content">
          <p className="cardText">
            Discover the planets of the solar system and their main properties
          </p>
          <Link to="/:earth" className="navlink">
            <button className="cardButton">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanetsfactsCard;
