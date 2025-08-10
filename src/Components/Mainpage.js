import React from "react";
import "./Mainpage.css";
import { useNavigate } from "react-router-dom";
import Cake from "./Cake";
import hp from "./hp.png";
import image from "./image.png";

const Mainpage = () => {
  const navigate = useNavigate();

  const handleClickHere = () => {
    navigate("/SecondPage");
  };
  return (
    <div>
      <div className="mainpage">
        <div className="hp1">
          <img src={hp} alt="" />
        </div>

        <div className="heading">
          <h1 className="heading-text">Cheers to 21 Kasisssssssss</h1>
        </div>

        <div className="image">
          <img src={image} alt="" style={{
      width: "120%",
      height: "120%",
      objectFit: "cover",
      transform: "translate(-10%, -10%)", // center the zoom
    }}/>
        </div>

        <div className="cake-center">
          <Cake />
        </div>

        <button className="button" onClick={handleClickHere}>
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Mainpage;
