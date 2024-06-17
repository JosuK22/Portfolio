import React from 'react';

//----------------import resume-----------------
import { resume } from '../../../data/Texts/Header/headerData';

const HeaderButtons = () => {
  return (
    <div className="header__button">
      <a href={resume.resume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" id='b-1'>
        Let's talk
      </a>
    </div>
  );
};

export default HeaderButtons;
