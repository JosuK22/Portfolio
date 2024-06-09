import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import HeaderButtons from '../Buttons/HeaderButtons';
import './header.css';
import Card from '../HeaderCard/Card';
import { CiSun } from 'react-icons/ci';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';
import { headerData } from '../../../data/Header/headerData';
import { jobRoles } from '../../../data/Header/roles';

const TypedText = () => {
  useEffect(() => {
    const strings = [
      `${jobRoles.role_1}`,
      `${jobRoles.role_2}`,
      `${jobRoles.role_3}`,
      `${jobRoles.role_4}`,
      `${jobRoles.role_5}`
    ]
    const typed = new Typed('#typed-text', {
      strings : strings,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="typed-text" className="text-light"></span>;
};

const Header = ({ toggleButton, isToggled }) => {
  const [clicked, setClicked] = useState(false);

  const handleToggleClick = () => {
    toggleButton();
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // Reset the state after 300ms to remove the transition class
  };

  return (
    <header id="home">
      <div className="container header__container">
        <div className="toggle-button" onClick={handleToggleClick}>
          <div className={`icon-container ${clicked ? 'clicked' : ''}`}>
            {isToggled ? <WiMoonAltWaningCrescent4 /> : <CiSun />}
          </div>
        </div>
        <div className="card__container">
          <Card />
        </div>

        <div className="text__content">
          <h5>Hello I'm</h5>
          <h1>
            <span id="n1">{headerData.firstname}</span> <span id="n2">{headerData.middlename}</span> <span id="n3">{headerData.lastname}</span>
          </h1>
          <h5 id='typer'>
            <TypedText />
          </h5>
          <div className='buttons'>
            <HeaderButtons />
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
