import React, { useState, useEffect } from 'react';
import slide1 from '../../img/slider1.jpg';
import slide2 from '../../img/slider2.jpg';
import slide3 from '../../img/slider3.jpg';

const images = [slide1, slide2, slide3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[55vh] overflow-hidden"> {/* Ajusta la altura aquí */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="min-w-full h-full flex items-center justify-center" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#e60311] p-3 rounded-full shadow-md text-white text-lg"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#e60311] p-3 rounded-full shadow-md text-white text-lg"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="bg-[#e60311] text-white py-3 px-6 rounded text-lg">
          Comprar Ahora
        </button>
      </div>
    </div>
  );
};

export default Slider;
