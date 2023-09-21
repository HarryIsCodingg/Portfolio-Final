import React from "react";
import Sketch from "../images/sketch.jpg";
import { Faboo, FaDraftingCompass } from "react-icons/fa";

function BackGround() {
  return (
    <div className="history">
      <img
        className="sketch-image"
        src={Sketch}
        alt="Sketch picture not found"
      />

      <div className="history-description quicksand">
        <p>
          In 2018, Graduated from Verdun Adult and Career Center with diploma of
          Residential And Commercial Drafting
        </p>
        <p className="secondary-color bold-text margin-top">
          {" "}
          Skills Acquired{" "}
        </p>
        <p style={{ marginTop: "10px" }}>
          <FaDraftingCompass /> Revit <br />
          <FaDraftingCompass /> AutoCad
        </p>
      </div>
    </div>
  );
}

export default BackGround;
