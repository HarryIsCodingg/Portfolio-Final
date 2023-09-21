import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Project({ photos, title, description, link, id }) {
  return (
    <div className="project-wrapper">
      <h2>{title}</h2>
      <Carousel>
        {photos.map((photo) => {
          return (
            <div key={id}>
              <img src={photo} />
            </div>
          );
        })}
      </Carousel>

      <p>{description}</p>
      <a href={link}>
        <button className="btn">More</button>
      </a>
    </div>
  );
}

export default Project;
