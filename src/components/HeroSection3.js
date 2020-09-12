import React from "react";
import "../App.css";
import "./HeroSection2.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-6.mp4" autoPlay loop muted />
      <h1>EVENTS</h1>
      <p>YOU CAN CHOOSE FROM A WIDE RANGE OF EVENTS</p>
    </div>
  );
}

export default HeroSection;
