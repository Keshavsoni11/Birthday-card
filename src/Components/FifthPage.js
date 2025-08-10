import React from "react";
import "./FifthPage.css";
import image from './image.png'
import { useNavigate } from "react-router-dom";

const FifthPage = () => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate("/fourthpage");
  };

  const handleNextClick = () => {
    navigate("/sixthPage");
  };
  return (
    <div className="fullpage">
      <div className="cards">
        <div className="card" style={{ width: "20rem" }}>
          <img src={image} className="card-img-top" alt="..." />
        </div>
      </div>

      <button className="button1" onClick={handleNextClick}>
        Click Here
      </button>

      <button className="button2" onClick={handlePreviousClick}>
        Click Here
      </button>
    </div>
  );
};

export default FifthPage;
