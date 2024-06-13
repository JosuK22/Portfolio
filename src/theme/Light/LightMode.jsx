import React from 'react';
import './LightMode.css';

const MovingSky = () => {
    document.querySelector("body").setAttribute("data-theme","dark");

  return (

    <div className="background-container">
      <div className="bg-shape1"></div>
      <div className="bg-shape2"></div>
      <div className="bg-shape3"></div>
    </div>

  );
};

export default MovingSky;
