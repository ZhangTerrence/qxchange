import React from "react";
import "../css/Landing.css";

export const Landing = () => {
  return (
    <div className="index">
        <div className="overlap-group">
        <div className="text-wrapper">(forum name)</div>
          <div className="text-wrapper">Your Name</div>
        </div>
        <div className="project-name">HackRU Goated Project</div>
        <img
          className="arrow"
          alt="Arrow"
          src="https://cdn.animaapp.com/projects/65217f2625a5f136eb81c527/releases/65217fdf819c5f5f1d286d06/img/arrow-1-1@2x.png"
        />
    </div>
  );
};

