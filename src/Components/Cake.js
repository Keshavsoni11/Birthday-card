import React from "react";
import './Cake.css'

const Cake = () => {
  return (
    <div className="cake-container">
      <div className="birthday-cake">
        <div className="holder"></div>
        <div className="shadow"></div>
        <div className="cake">
          <div className="chocolate"></div>
        </div>
        <div className="candle"></div>
        <div className="flame"></div>
      </div>
    </div>
  );
};

export default Cake;
