import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { GiBrain } from "react-icons/gi";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";


import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [footerReached, setFooterReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        '#home': document.getElementById('home').offsetTop,
        '#about': document.getElementById('about').offsetTop,
        '#portfolio': document.getElementById('portfolio').offsetTop,
        '#skills': document.getElementById('skills').offsetTop,
        '#contact': document.getElementById('contact').offsetTop
      };

      const scrollPosition = window.scrollY + window.innerHeight / 1.4;

      let newActiveNav = '#home'; 

      Object.keys(sectionOffsets).forEach(section => {
        if (scrollPosition >= sectionOffsets[section]) {
          newActiveNav = section;
        }
      });

      setActiveNav(newActiveNav);

      
      const footerOffset = document.getElementById('footer').offsetTop;
      if (scrollPosition >= footerOffset) {
        setFooterReached(true);
      } else {
        setFooterReached(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={footerReached ? 'footer-reached' : ''}>
      <a href="#home" className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''}><FaRegFolderOpen /></a>
      <a href="#skills" className={activeNav === '#skills' ? 'active' : ''}><GiBrain /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}><IoCallOutline /></a>
    </nav>
  );
};

export default Topbar;
