import React from 'react';
import Marquee from "react-fast-marquee";

import { skillsDataA } from '../../data/utils/skillTechnologies';
import {skillsDataB} from '../../data/utils/skillTools';
import { skillsImage } from '../../data/utils/skillsImage';

import './skills.css';

const Skills = () => {
  const skillBoxStyle = {
    background: 'transparent'
  };

  return (
    <section id="skills">
      <h5>Technologies and Tools I am familiar with</h5>
      <h2>Skills</h2>

      <div className="skillsContainer">
        {/* First Marquee at the top */}
        <div className="skill--scroll-1">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsDataA.map((skill, id) => (
              <div className="skill--box" id='s1' key={id} style={skillBoxStyle}>
                
                <img src={skillsImage(skill)} alt={skill} />
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Second Marquee at the bottom */}
        <div className="skill--scroll-2">
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
            {skillsDataB.map((skill, id) => (
              <div className="skill--box" id='s2' key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
