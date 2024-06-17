import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

//import Data of about section
import { aboutData, aboutImage } from "../../data/Texts/About/aboutData";

const Intro = () => {
  return (
    <section id="about">
      
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutImage.AboutImage} alt="Joseph K Anoj" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>{aboutData.Experience}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>{aboutData.Projects}</small>
            </article>
          </div>
          <p>
          {aboutData.Summary}
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
