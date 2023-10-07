import React from "react";
import "../css/landing.css";

const Landing = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="overlap-group">
        <div className="text-wrapper">(forum name)</div>
          <div className="text-wrapper">Your Name</div>
        </div>
        <div className="text-wrapper-3">HackRU Goated Project</div>
        <img
          className="arrow"
          alt="Arrow"
          src="https://cdn.animaapp.com/projects/65217f2625a5f136eb81c527/releases/65217fdf819c5f5f1d286d06/img/arrow-1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Landing