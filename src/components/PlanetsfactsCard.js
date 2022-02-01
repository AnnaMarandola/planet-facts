import { Link } from "react-router-dom";
import cardData from "../data/projectsData";
import "../styles/PlanetsfactsCard.scss";

const PlanetsfactsCard = () => {
  return (
    <>
      {cardData.map((card, id) => (
        <div
          className="link-card"
          style={{ backgroundImage: `url(${card.picture})` }}
          key={id}
        >
          <div className="border">
            <h1 className="cardTitle">{card.title}</h1>
            <div className="content">
              <p className="cardText">
                {card.text}
              </p>
              <Link to="/:earth" className="navlink">
                <button className="cardButton">{card.btn}</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlanetsfactsCard;
