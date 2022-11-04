import React from "react";
import Skill from "./Skill";

function SkillSet() {
  const skillArray = [
    { id: 1, skillName: "JAVA", skillEfficiency: "75%" },
    { id: 2, skillName: "JAVASCRIPT", skillEfficiency: "70%" },
    { id: 3, skillName: "REACT", skillEfficiency: "65%" },
    { id: 4, skillName: "HTML", skillEfficiency: "85%" },
    { id: 5, skillName: "CSS", skillEfficiency: "80%" },
    { id: 6, skillName: "MYSQL", skillEfficiency: "70%" },
    { id: 7, skillName: "PHP", skillEfficiency: "65%" },
  ];

  return (
    <div className="skill-set">
      <h2>Skill Set</h2>
      {skillArray.map((skill) => (
        <Skill
          skillName={skill.skillName}
          skillEffeciency={skill.skillEfficiency}
          key={skill.id}
        />
      ))}
    </div>
  );
}

export default SkillSet;
