import React, { useState } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.png";
import img4 from "./img1.jpg";
import img5 from "./img2.jpg";
import img6 from "./img3.png";
import "./EnglishCarousal.css"; // Import the CSS file

const Englishcarousel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievers = [
    {
      id: 1,
      name: "Alex - Age 12, Grade 7",
      description: "Alex wrote an award-winning poem featured in the school magazine.",
      image: img1,
    },
    {
      id: 2,
      name: "Sophia - Age 13, Grade 8",
      description: "Sophia excelled in public speaking, winning 1st prize in the debate competition.",
      image: img2,
    },
    {
      id: 3,
      name: "Daniel - Age 11, Grade 6",
      description: "Daniel wrote a short story published in a national competition.",
      image: img3,
    },
    {
      id: 4,
      name: "Emma - Age 14, Grade 9",
      description: "Emma created an educational blog focused on English grammar tips.",
      image: img4,
    },
    {
      id: 5,
      name: "James - Age 13, Grade 8",
      description: "James performed Shakespeare's plays, receiving a standing ovation.",
      image: img5,
    },
    {
      id: 6,
      name: "Mia - Age 12, Grade 7",
      description: "Mia won a creative writing contest with her imaginative short stories.",
      image: img6,
    },
  ];

  const slides = [];
  for (let i = 0; i < achievers.length; i += 3) {
    slides.push(achievers.slice(i, i + 3));
  }

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel1-container">
      <h2>Join 1 million+ students worldwide, excelling in English</h2>
      <div className="carousel1">
        <div
          className="carousel1-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((group, index) => (
            <div className="carousel1-slide" key={index}>
              {group.map((achiever) => (
                <div className="card1" key={achiever.id}>
                  <img
                    src={achiever.image}
                    alt={achiever.name}
                    className="card1-img"
                  />
                  <div className="card1-content">
                    <h5>{achiever.name}</h5>
                    <p>{achiever.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel1-button prev" onClick={handlePrev}>
        &#8592; Prev
      </button>
      <button className="carousel1-button next" onClick={handleNext}>
        Next &#8594;
      </button>
    </div>
  );
};

export default Englishcarousel1;
