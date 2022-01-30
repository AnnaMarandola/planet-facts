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
        <button className="cardButton">Explore</button>
      </div>
      </div>
    </div>
  );
};

export default PlanetsfactsCard;
