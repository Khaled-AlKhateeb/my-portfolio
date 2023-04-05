import React from "react";
import '../styles/Skill.css';

const Skill = (props) => {
  return (
    <div className="popup-skill-container">
     <div className={`dot ${props.style}`} /> {props.skillName}
    </div>
  );
};

export default Skill;