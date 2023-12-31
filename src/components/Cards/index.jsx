import React from "react";
import "./style.css";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      image: image1,
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 2,
      image: image2,
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 3,
      image: image3,
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ];

  return (
    <div className="cards-wrapper" id="cards">
      <h1 className="cards-header">Services we offer</h1>
      <div className="cards-container">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <img className="card-image" src={card.image} alt={card.title} />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
