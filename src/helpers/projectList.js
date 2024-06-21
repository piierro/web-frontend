import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';

import icon1 from '../assets/projects/icon1.jpg';
import icon2 from '../assets/projects/icon2.jpg';
import icon3 from '../assets/projects/icon3.jpg';

const projects = [
    {
        title: "It's hard to concentrate",
        skills: "CSS JS",
        img: icon1,
        imgBig: project1,
        description: "'It is a web project that delves into the complexities of concentration in the modern age. It explores the reasons behind our collective struggle to focus and offers insights and tips on improving concentration. Through engaging content and interactive elements, users are invited to reflect on their own experiences with focus, multitasking, and the digital distractions that permeate our lives. Purpose of the project is to practice adaptive layout, and implement interactive theme switcher.'",
        gitHubLink: "https://github.com/piierro/slozhno-sosredotochitsya"
    },
    {
        title: "Closing tag",
        skills: "CSS JS",
        img: icon2,
        imgBig: project2,
        description: "",
        gitHubLink: "https://github.com/piierro/zakrivayuschiy-teg-f"

    },
    {
        title: "Mesto",
        skills: "CSS JS",
        img: icon3,
        imgBig: project2,
        description: "Mesto is an educational project of the Yandex Frontend Developer course, which taught the basics of the JavaScript language. Here we implemented: connecting scripts to a web page, using HTML templates, working with the DOM, setting up an assembly using the Webpack module builder, dividing the code into modules, form validation, http requests, as well as deploying the project to GitHub Pages.",
        gitHubLink: "https://github.com/piierro/mesto-project-ff"

    }
]

export {projects};