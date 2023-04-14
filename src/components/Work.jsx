import React, { useState } from "react";
import "../styles/Work.css";

const Work = (props) => {
  return (
    <div className='work-item-container'>
      <div
        className='work-item-link link'
        onClick={props.openPopup}
      >
        {props.name}
      </div>
      
    </div>
  );
};

export default Work;
