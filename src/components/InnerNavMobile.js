import "../styles/InnerNavMobile.scss";

const InnerNavMobile = ({handleChange}) => {
  return (
    <div className="innernav-container-m">
      <button className="inner-button-m" value="overview" onClick={handleChange}>overview</button>
      <button className="inner-button-m" value="structure" onClick={handleChange}>structure</button>
      <button className="inner-button-m" value="geology" onClick={handleChange}>surface</button>
    </div>
  );
};

export default InnerNavMobile;
