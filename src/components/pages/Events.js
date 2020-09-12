import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection3";


export default function Events() {
  return (
    <>
    <HeroSection></HeroSection>
      {/* <h1 className="events"> EVENTS </h1> */}
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
}
