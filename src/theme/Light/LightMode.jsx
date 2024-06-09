import React from 'react';
import './LightMode.css';

const MovingSky = () => {
    document.querySelector("body").setAttribute("data-theme","dark");

  return (

    <div class="background-container">
      <div class="bg-shape1"></div>
      <div class="bg-shape2"></div>
      <div class="bg-shape3"></div>
    </div>

  );
};

export default MovingSky;
