// src/components/Header.jsx
import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    // Dynamic wave effect
    const handleMouseMove = (e) => {
      const waves = document.querySelectorAll('.wave');
      const xPos = e.clientX / window.innerWidth;
      const yPos = e.clientY / window.innerHeight;

      waves.forEach((wave, index) => {
        wave.style.transform = `translateX(-${xPos * (index + 1) * 10}px)`;
        wave.style.opacity = 0.2 + (yPos * 0.3);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Dynamic title coloring
    const title = document.querySelector('.dynamic-title');
    const colors = ['#ff006e', '#3a86ff', '#8338ec', '#ffbe0b', '#fb5607'];
    let colorIndex = 0;

    const interval = setInterval(() => {
      if (title) {
        title.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
      }
    }, 2000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="header">
      <div className="wave-container">
        <div className="wave wave-one"></div>
        <div className="wave wave-two"></div>
        <div className="wave wave-three"></div>
      </div>

      <div className="header-content floating">
        <h1 className="dynamic-title">Welcome to Our Website</h1>
        <p className="subtitle">Experience the perfect blend of creativity and technology with our innovative solutions.</p>
        <a href="#" className="cta-button">Get Started</a>
      </div>

      <div className="zigzag"></div>
    </header>
  );
};

export default Header;
