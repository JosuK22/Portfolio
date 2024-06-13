import React from "react"
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub,FaInstagram} from 'react-icons/fa';
import { socialLinks } from "../../../links/socialMedia";

const Card = () =>{
    return(
        <div className="cardContainer">

            <div className="profileDiv"></div>

            <div className="iconDiv">

                <div className="socialDiv">
                    <a href={socialLinks.github} target="_blank" rel="noreferrer"><FaGithub/></a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><TiSocialLinkedin /></a>
                    <a href={socialLinks.instagram} target="_blank" rel="noreferrer"><FaInstagram/></a>
                </div>

            </div>
            
        </div>
    );
};

export default Card
