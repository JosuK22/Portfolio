//----------------------- import icons ---------------------

import html from '../../assets/PNG/HTML.png'
import css from '../../assets/SVG/css.svg'
import javascript from '../../assets/SVG/javascript.svg'
import react from '../../assets/SVG/react.svg'
import bootstrap from '../../assets/SVG/bootstrap.svg'
import mongoDB from '../../assets/PNG/MongoDB.png'
import java from '../../assets/SVG/java.svg'
import python from '../../assets/SVG/python.svg'
import git from '../../assets/SVG/git.svg'
import materialui from '../../assets/SVG/materialui.svg'
import figma from '../../assets/SVG/figma.svg'
import mysql from '../../assets/SVG/mysql.svg'
import tailwind from '../../assets/SVG/tailwind.svg'
import postman from '../../assets/PNG/Postman.png'
import nodejs from '../../assets/PNG/Node.png'
import expressjs from '../../assets/PNG/express.png'
import github from '../../assets/PNG/github.png'
import npm from '../../assets/PNG/npm.png'
import yarn from '../../assets/PNG/Yarn.png'
import vscode from '../../assets/PNG/VScode.png'
import vitejs from '../../assets/SVG/vitejs.svg'
import chatgpt from '../../assets/PNG/1681038242chatgpt-logo-png.png'
import versel from '../../assets/0001.png'

// import name from '../assets/ image-folder/image-name '  -- copy & paste if there is more

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;        
        case 'java':
            return java;
        case 'python':
            return python;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'figma':
            return figma;
        case 'postman':
            return postman;
        case 'nodejs':
            return nodejs;
        case 'expressjs' :
            return expressjs;
        case 'github' :
            return github;
        case 'npm' :
            return npm;
        case 'yarn':
            return yarn;
        case 'vscode':
            return vscode;
        case 'vitejs' :
            return vitejs;
        case 'chatgpt' :
            return chatgpt;
        case 'versel':
            return versel;

        // case 'name(Must be small letter)': -- copy & paste if there is more icons
        //     return name;

        default:
            break;
    }
}