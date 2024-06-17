import React from "react";

//---------- import Portfolio Data --------------
import { soloProjects } from "../../data/Texts/Portfolio/portfolioData";

import "./portfolio.css";

const Portfolio = () => {
 
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-header__button">
              <a
                href={pro.github}
                target="_blank"
                className={`btn ${!pro.github ? 'disabled' : ''}`}
                rel="noreferrer"
                onClick={(e) => {
                  if (!pro.github) e.preventDefault();
                }}
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className={`btn btn-primary ${!pro.link ? 'disabled' : ''}`}
                rel="noreferrer"
                onClick={(e) => {
                  if (!pro.link) e.preventDefault();
                }}
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
