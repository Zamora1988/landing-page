import React from "react";
import "./Hero.css";
import Social from "./Social";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Real State" className="hero__image" />
      <Social />
      <h1 className="hero__title">Real State made simple.</h1>
    </div>
  );
};

export default Hero;
