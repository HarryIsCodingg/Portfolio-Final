import React from "react";
import Card from "../UI/Card";
import SelfImage from "../images/Personal2.png";
import TextAndImage from "../UI/SelfDescription";
import SelfDescription from "../UI/SelfDescription";
import Skill from "../components/Skill";
import SkillSet from "../components/SkillSet";
import BackGround from "../components/BackGround";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="about">
        <SelfDescription />
      </div>
      <SkillSet />
      <BackGround />
    </>
  );
}

export default About;
