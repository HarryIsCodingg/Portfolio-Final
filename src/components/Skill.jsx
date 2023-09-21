import React from "react";

function Skill({ skillName, skillEffeciency }) {
  const skillStyle = {
    maxWidth: skillEffeciency,
    position: "absolute",
    height: "100%",
    backgroundColor: "#3a5a40",
    borderRadius: "15px",
  };

  return (
    <div className="skill">
      <div className="skill-name josefin">{skillName}</div>
      <div className="skill-bar">
        <div className="skill-efficiency" style={skillStyle}></div>
      </div>
    </div>
  );
}

export default Skill;
