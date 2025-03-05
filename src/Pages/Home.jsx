import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Footer from "../Footer/Footer";

const images = [Image1, Image2, Image3, Image4];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

 
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
    <div 
      className="relative h-screen w-full overflow-hidden mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity transform duration-1000 ${
              index === currentImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-50 px-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg animate-fadeIn">
          Welcome to <span className="text-orange-400">Melody Bites</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md animate-slideUp">
          Enjoy delicious bites with a melody of flavors. Order now or explore our menu.
        </p>
        <div className="mt-6 flex space-x-6 animate-fadeInSlow">
          <NavLink
            to="/menu"
            className="bg-orange-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-orange-600 transition-all shadow-lg"
          >
            View Menu
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-white px-6 py-3 rounded-lg text-gray-900 font-semibold hover:bg-gray-200 transition-all shadow-lg"
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      
    </div>
    <div>
    <Footer/>
  </div>
  </>
  );
};

export default HomePage;
