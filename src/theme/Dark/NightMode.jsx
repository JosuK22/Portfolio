import React from 'react';
import './NightMode.css';

const TwinklingStars = () => {

  document.querySelector("body").setAttribute("data-theme","light")
  
  
  return (
    <>
    <div className="stars">

        {/* --------------Twinkling stars---------- */}

        {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}

      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="star_2"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}

      {/* --------------Shooting stars---------- */}

      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}
      
    </div>
    
    </>
  );
};

export default TwinklingStars;