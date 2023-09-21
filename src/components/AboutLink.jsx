import { useContext } from "react";
import { NavLink } from "react-router-dom";
import PortfolioContext from "../context/PortfolioContext";
import AboutImage from "../images/project-images/about-image.png";
import homeImage from "../images/project-images/home.png";

function AboutLink() {
  const { setBackgroundImage } = useContext(PortfolioContext);
  return (
    <div
      className="nav-item"
      onMouseEnter={() => {
        setBackgroundImage(AboutImage);
      }}
      onMouseLeave={() => {
        setBackgroundImage(homeImage);
      }}
    >
      <NavLink to="/about" className="link">
        About
      </NavLink>
    </div>
  );
}

export default AboutLink;
