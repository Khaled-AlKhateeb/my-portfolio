import React from "react";
import { useInView } from "react-intersection-observer";
import Skill from "./Skill";
import "../styles/Popup.css";

const Popup = ({handleClose, name, image, production, description, skill, url, urlSource}) => {
  const handleCloseButton = () => {
    handleClose();
  };

  const [ref, inView] = useInView({ threshold: 0.5 });
  
  return (
    <div
      className='popup'
    >
      <div className='popup-inner'>
        <button
          className='popup-close-btn'
          onClick={handleCloseButton}
        >
          close
        </button>
        <div className='popup-content-container'>
          <div className={`box ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="box-inner">
              <img
                className='popup-image'
                src={image}
                alt={name}
              />
            </div>
          </div>
          <div className='popup-info-container'>
            <h1 className='popup-title'>{name}</h1>
            <p className='popup-info-production'>{production}</p>
            <p className='popup-info-description'>{description}</p>
            <div className='skill-main-container'>
              {skill.map((skillName) => {
                let style = {};
                switch (true) {
                  case skillName.includes("HTML"):
                    style = "html";
                    break;
                  case skillName.includes("CSS"):
                    style = "css";
                    break;
                  case skillName.includes("JavaScript"):
                    style = "javascript";
                    break;
                  case skillName.includes("React-Native"):
                    style = "react-native";
                    break;
                  case skillName.includes("ReactJS"):
                    style = "reactjs";
                    break;
                  case skillName.includes("Redux"):
                    style = "redux";
                    break;
                  case skillName.includes("Ruby"):
                    style = "ruby";
                    break;
                  default:
                    break;
                }
                return (
                  <Skill
                    key={skillName}
                    skillName={skillName}
                    style={style}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="links-container">
          {url ? 
              <a
                className='popup-link'
                href={url}
              >
                Visit Site
              </a> : null
          }
              <a
                className='popup-link'
                href={urlSource}
              >
                Source Code
              </a>
            </div>
      </div>
    </div>
  );
};

export default Popup;
