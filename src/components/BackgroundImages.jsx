import React, { useState } from "react";
import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
import homeImage from "../images/project-images/home.png";

function BackgroundImages() {
  const { backgroundImage } = useContext(PortfolioContext);

  return (
    <div className="background-image">
      <img
        src={backgroundImage}
        alt="No Image"
        style={{ height: "100%", zIndex: "-10" }}
      />
    </div>
  );
}

BackgroundImages.prototype = {
  backgroundImage: homeImage,
};

export default BackgroundImages;
