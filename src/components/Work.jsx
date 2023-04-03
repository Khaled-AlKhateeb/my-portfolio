import React, { useState } from 'react';
import Popup from './Popup';
import '../styles/Work.css';

const Work = (props) => { 
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  }

  const closePopup = () => {
    setIsOpen(false);
  }

  return (
    <div className='work-item-container'>
      <li className='work-item-link link' onClick={openPopup}>
        {props.name}
      </li>
        {isOpen && (
          <Popup
            name={props.name}
            image={props.image}
            production={props.production}
            description={props.description}
            skill={props.skill}
            url={props.url}
            onClose={closePopup}
          />
        )}
    </div>
  );
};

export default Work;