import React, { useState } from "react";

const slides = [
  "Mais de 10 anos de experiência no mercado",
  "Nossos clientes confiam em nossa expertise",
  "Soluções personalizadas para seu negócio",
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>{"<"}</button>
      <p>{slides[currentSlide]}</p>
      <button onClick={nextSlide}>{">"}</button>
    </div>
  );
};

export default Carousel;
