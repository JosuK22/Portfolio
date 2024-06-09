import React from 'react';
import CV from '../../../assets/Resume/JOSEPH-K-ANOJ_RESUME.pdf';

const HeaderButtons = () => {
  return (
    <div className="header__button">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" id='b-1'>
        Let's talk
      </a>
    </div>
  );
};

export default HeaderButtons;
