import React from "react";
import Skill from "./Skill";
import '../styles/Popup.css';

const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="popup-close-btn" onClick={props.onClose}>close</button>
        <h1 className='popup-title'>{props.name}</h1>
        <div className="popup-content-container">
          <img className="popup-image" src={props.image} alt={props.name} />
          <div className="popup-info-container">
            <p className="popup-info-production">{props.production}</p>
            <p className="popup-info-description">{props.description}</p>
            <div className="skill-main-container">
              {props.skill.map(skillName => {
                let style = '';
                {switch (true) {
                  case skillName.includes('HTML'):
                    style = "html"
                    break;
                  case skillName.includes('CSS'):
                    style = "css"
                    break;
                  case skillName.includes('JavaScript'):
                    style = "javascript"
                    break;
                  case skillName.includes('React-Native'):
                    style = "react-native"
                    break;
                  case skillName.includes('ReactJS'):
                    style = "reactjs"
                    break;
                  case skillName.includes('Redux'):
                    style = "redux"
                    break;
                  case skillName.includes('Ruby'):
                    style = "ruby"
                    break;
                  default:
                    break;
                }}
                return <Skill
                  skillName={skillName}
                  style={style}
                />;
              })}
            </div>
          <a className="popup-link" href={props.url}>Visit Site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;