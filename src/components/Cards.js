import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these events!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ process.env.PUBLIC_URL + "images/img-10.png" }
              text="Program Recruitment for Mid-Autumn Festival Gala for International Students in Tasmania"
              label="Upcoming"
              path="/services"
            />
            <CardItem
              src={ process.env.PUBLIC_URL + "images/img-11.png" }
              text="The 4th Koala Meets Panda-China-Australia Friendship Micro Video Contest officially launched"
              label="Upcoming"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={ process.env.PUBLIC_URL + "images/img-12.png" }
              text="CSSA member BBQ party"
              label="Past"
              path="/services"
            />
            <CardItem
              src={ process.env.PUBLIC_URL + "images/img-13.png" }
              text="The movie 'Eight Hundred' landed in Hobart"
              label="Past"
              path="/products"
            />
            <CardItem
              src={ process.env.PUBLIC_URL + "images/img-14.png" }
              text="Notice for transit passengers to China to complete nucleic acid testing as required"
              label="Past"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
