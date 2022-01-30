import "../styles/HomePage.scss";
import PlanetsfactsCard from "./PlanetsfactsCard";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="links-container">
          <PlanetsfactsCard />
          <PlanetsfactsCard />
          <PlanetsfactsCard />
          <PlanetsfactsCard />
          <PlanetsfactsCard />

      </div>
    </div>
  );
};

export default HomePage;
