import React from "react";
import { useState, useEffect } from "react";
import "../stylings/carousel.css";

const ImageCarousel = () => {
  const slides = [
    {
      id: 1,
      img: "/images/share.png",
      name: "Did You Know?",
      namee: "←",
      para: "You can invest in stocks under $10.",
    },
    {
      id: 2,
      img: "/images/wallet.png",
      name: "Did You Know?",
      namee: "←",
      para: "Wallet works without PIN",
    },
    {
      id: 3,
      img: "/images/bike.png",
      name: "Did You Know?",
      namee: "←",
      para: "Bike insurance starts at $20/yr*",
    },
    {
      id: 4,
      img: "/images/money.png",
      name: "Did You Know?",
      namee: "←",
      para: "You can daily MF SIP with $1",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);
  const unavailable=()=>{
    alert('unavailable')
  }
  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="carousel-slide" key={slide.id}>
            <div className="do-s">
              <div className="ddd">
                {" "}
                <h2>{slide.name}</h2>
                <button onClick={unavailable}>{slide.namee}</button>
              </div>

              <p>{slide.para}</p>
            </div>
            <div className="right-dys ">
              <img src={slide.img} alt="" className="img-ssslide" />
            </div>
            {/* <div className="do-y">
              <h1>{slide.name}</h1>
              <button>{slide.namee}</button>
              <p>{slide.para}</p>
            </div>
            <div className="right-do">
              <img src={slide.img} alt="" className="img-slide"/>
            </div> */}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
