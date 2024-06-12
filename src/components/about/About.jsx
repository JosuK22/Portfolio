import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/My_Image/Me-2.png'

const Intro = () => {
  return (
    <section id="about">
      
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Joseph K Anoj" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
          Experienced Full Stack Developer with over a year of hands-on experience. Skilled in identifying and implementing web-based user interactions, crafting responsive UI components using React, and translating designs into robust code. Proficient in JavaScript and React JS workflows, with a focus on frontend performance optimization, troubleshooting, and debugging for enhanced user experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
