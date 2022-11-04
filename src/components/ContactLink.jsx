import { NavLink } from "react-router-dom";
import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
import BackgroundImages from "./BackgroundImages";
import ContactImage from "../images/project-images/contact-image.png";
import homeImage from "../images/project-images/home.png";

function ContactLink() {
  const { setBackgroundImage } = useContext(PortfolioContext);
  return (
    <div
      className="nav-item"
      onMouseEnter={() => {
        setBackgroundImage(ContactImage);
      }}
      onMouseLeave={() => {
        setBackgroundImage(homeImage);
      }}
    >
      <NavLink to="/contact" className="link">
        Contact
      </NavLink>
    </div>
  );
}

export default ContactLink;
