import React from "react";
import "./style.css";
import image from "./image/hero-image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-heading">
            Great <span className="span1">software</span> is
            <br />
            <span className="span2">built by great</span>{" "}
            <span className="span3">teams</span>
          </h1>
          <p className="hero-para">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <button className="hero-button">Let’s get started!</button>
        </div>
        <div className="hero-right">
          <img className="hero-image" src={image} alt="hero-image" />
        </div> 
      </div>
    </div>
  );
};

export default Hero; 
