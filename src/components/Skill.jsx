import React from "react";
import '../styles/Skill.css';

const Skill = (props) => {
  return (
    <div className={`skill-container ${props.style}`}>
      {props.skillName}
    </div>
  );
};

export default Skill;