import { useContext } from "react";
import { NavLink } from "react-router-dom";
import PortfolioContext from "../context/PortfolioContext";
import ProjectImage from "../images/project-images/project-image.png";
import homeImage from "../images/project-images/home.png";

function Work() {
  const { setBackgroundImage } = useContext(PortfolioContext);

  return (
    <div
      className="nav-item"
      onMouseEnter={() => {
        setBackgroundImage(ProjectImage);
      }}
      onMouseLeave={() => {
        setBackgroundImage(homeImage);
      }}
    >
      <NavLink to="/ProjectList" className="link">
        Projects
      </NavLink>
    </div>
  );
}

export default Work;
