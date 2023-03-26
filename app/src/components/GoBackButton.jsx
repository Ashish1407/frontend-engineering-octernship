import React from 'react';
import "./GoBackButton.css";

import { BsFillSkipBackwardCircleFill } from "react-icons/bs";

const GoBackButton = ({ onClick }) => {
  return (
    <div className="back-btn">
      <button onClick={onClick}>
        Go Back
      </button>
    </div>
  );
};

export default GoBackButton;
