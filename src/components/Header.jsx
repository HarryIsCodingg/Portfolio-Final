import React from "react";
import Logo from "../images/project-images/myLogo.png";
import AboutLink from "./AboutLink";
import ContactLink from "./ContactLink";
import HomeLink from "./HomeLink";
import SocialMedia from "./SocialMedia";
import ProjectLink from "./ProjectLink";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <Link to="/">
          <img
            src={Logo}
            alt="No Logo Found"
            style={{
              width: "300px",
              marginLeft: "15px",
              maxHeight: "70px",
            }}
          />
        </Link>
      </div>
      <div className="navigation">
        <HomeLink />
        <hr />
        <AboutLink />
        <hr />
        <ProjectLink />
        <hr />
        <ContactLink />
        <hr />
      </div>
      <div className="social-media">
        <SocialMedia />
      </div>
    </nav>
  );
}

export default Header;
