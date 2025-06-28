import React, { useEffect, useState } from 'react';
import img_1 from './Banar-1.png';
import img_2 from './Banar-2.png';
import img_3 from './Banar-3.png';
import img_4 from './Banar-4.png';
import img_5 from './Banar-5.png';
const dummyImages = [img_1, img_2, img_3, img_4, img_5];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dummyImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slider Images */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        {dummyImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center px-8 md:px-20">
        <div className="text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Order your favourite food here
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-lg transition duration-300">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
