import React, { useState } from 'react';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/HeaderContainer/Header';
import Intro from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/navbar/Topbar';
import TwinklingStars from './theme/Dark/NightMode';
import MovingSky from './theme/Light/LightMode';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleComponent = () => {
    setIsToggled(!isToggled);
  };
  
  return (
    <>
      <Header toggleButton={toggleComponent} isToggled={isToggled} />
      <Topbar />
      <Intro />
      {isToggled ? <MovingSky /> : <TwinklingStars/>}
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
