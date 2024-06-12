import React from "react";
import IMG1 from "../../assets/Projects/NotesApp.png";
import IMG2 from "../../assets/Projects/HTML,CSS_Portfolio.png";
import IMG3 from "../../assets/Projects/HTMLGAME.png";
import IMG4 from "../../assets/Projects/HotelBooking.png";
import IMG5 from "../../assets/Projects/SupperApp.jpeg";
import IMG6 from "../../assets/Projects/NotesApp_2.jpeg";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Notes App",
      img: IMG1,
      description:
        "A simple Note App using React.js. The user data is stored in the Local Storage",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://josuk22.github.io/Notes-App/",
      github: "https://github.com/JosuK22/Notes-App",
    },
    {
      id: 2,
      title: "Notes App 2.0",
      img: IMG6,
      description: "Updated Notes App with groups option",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "",
      github: "https://github.com/JosuK22/Pocket_Notes",
    },
    {
      id: 3,
      title: "Super App",
      img: IMG5,
      description: "Multi-purpose react app.",
      technologies: "Html | CSS | APIs | React js",
      link: "",
      github: null,
    },
    {
      id: 4,
      title: "HTML CSS JS Portfolio",
      img: IMG2,
      description:
        "A personal portfolio website made using HTML, CSS, Javascript",
      technologies: "HTML | CSS | JavaScript",
      link: "https://josuk22.github.io/HTML-CSS-Portfolio/",
      github: "https://github.com/JosuK22/HTML-CSS-Portfolio",
    },
    {
      id: 5,
      title: "Rock Paper Scissors Game",
      img: IMG3,
      description:
        "A Rock Paper Scissors game. The website is mainly functionally developed with JavaScript",
      technologies: "HTML | CSS | JavaScript",
      link: "https://josuk22.github.io/RockPaperScissors/",
      github:
        "https://github.com/JosuK22/RockPaperScissors",
    },
    {
      id: 6,
      title: "Hotel Management Website",
      img: IMG4,
      description: "Group project, made to manage booking rooms in hotels",
      technologies: "HTML | Node js | Express js | MongoDB ",
      link: "",
      github: null,
    },
  ];

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
