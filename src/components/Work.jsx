import React, { useState } from "react";
import Popup from "./Popup";
import "../styles/Work.css";

const Work = (props) => {
  //const [isOpen, setIsOpen] = useState(false);
  //const popupRef = useRef();
  //const screenWidth = window.screen.width;

  //const openPopup = () => {
  //  setIsOpen(true);
  //};

  //const closePopup = () => {
  //  setIsOpen(false);
  //};

  //useEffect(() => {
  //  const handleClickOutside = (e) => {
  //    if (popupRef.current && !popupRef.current.contains(e.target)) {
  //      setIsOpen(false);
  //    }
  //  };

  //  if (isOpen && screenWidth <= 768) {
  //    document.addEventListener("click", handleClickOutside);
  //  }

  //  return () => {
  //    document.removeEventListener("click", handleClickOutside);
  //  };
  //}, [isOpen]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleItemClick = () => {
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='work-item-container'>
      <li
        className='work-item-link link'
        onClick={handleItemClick}
      >
        {props.name}
      </li>
      {isPopupOpen && (
        <Popup
          name={props.name}
          image={props.image}
          production={props.production}
          description={props.description}
          skill={props.skill}
          url={props.url}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Work;
