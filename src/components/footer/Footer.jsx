import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub,FaInstagram,FaFacebookF } from 'react-icons/fa';
import Clock from './time';
import { socialLinks } from '../../links/socialMedia';
import './footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#home" className="footer__logo">Joseph K Anoj</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href={socialLinks.github} target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href={socialLinks.instagram} target="_blank" rel="noreferrer" ><FaInstagram /></a>
        <a href={socialLinks.facebook} target="_blank" rel="noreferrer" ><FaFacebookF /></a>
      </div>
      <Clock></Clock>
      <div className="footer__copyright">
        <small>This website is made to showcase my skills. &copy; JosuK22 2024. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer