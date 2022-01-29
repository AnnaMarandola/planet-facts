import "../styles/InnerNavMobile.scss";

const InnerNavMobile = ({ handleChange, planetColor, view }) => {
  return (
    <div className="innernav-container">
      <div className="button-container">
        <button
          className="inner-button-m"
          value="overview"
          onClick={handleChange}
        >
          overview
        </button>
        <div className={ view === "overview" ? "underlined" : null} style={ view === "overview" ? {backgroundColor: planetColor} : null} />
        
      </div>

      <div className="button-container">
        <button
          className="inner-button-m"
          value="structure"
          onClick={handleChange}
        >
          structure
        </button>
        <div className={ view === "structure" ? "underlined" : null} style={ view === "structure" ? {backgroundColor: planetColor} : null} />
      </div>

      <div className="button-container">
        <button
          className="inner-button-m"
          value="geology"
          onClick={handleChange}
        >
          surface
        </button>
        <div className={ view === "geology" ? "underlined" : null} style={ view === "geology" ? {backgroundColor: planetColor} : null} />
      </div>
    </div>
  );
};

export default InnerNavMobile;
