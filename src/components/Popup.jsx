import React, { useState, useEffect, useRef } from "react";
import Skill from "./Skill";
import "../styles/Popup.css";

const Popup = ({handleClose, name, image, production, description, skill, url}) => {
  const popupRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClose();
      }
    };
    if (isMobile) {
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      if (isMobile) {
        document.removeEventListener('touchstart', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [isMobile, handleClose]);

  const handleCloseButton = () => {
    handleClose();
  };

  return (
    <div
      className='popup'
      ref={popupRef}
    >
      <div className='popup-inner'>
        <button
          className='popup-close-btn'
          onClick={handleCloseButton}
        >
          close
        </button>
        <h1 className='popup-title'>{name}</h1>
        <div className='popup-content-container'>
          <img
            className='popup-image'
            src={image}
            alt={name}
          />
          <div className='popup-info-container'>
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
            <a
              className='popup-link'
              href={url}
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
