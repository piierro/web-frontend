import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';

import icon1 from '../assets/projects/icon1.jpg';
import icon2 from '../assets/projects/icon2.jpg';
import icon3 from '../assets/projects/icon3.jpg';

const projects = [
    {
        title: "Web Larek Frontend",
        skills: "TypeScript, SCSS, JS, React",
        img: icon1,
        imgBig: project1,
        description: `The project is an online store with goods for web developers - a Web stall. 
         It consists of three main parts corresponding to the Model-View-Presenter (MVP) layers
         The Data layer (Model) is the layer that contains the data and logic of the application. 
         The Display layer (View) is the layer that is responsible for user interaction. 
         The Presentation layer (Presenter) is the layer that connects display, data and communication. 
         It is responsible for handling user events, updating the model, and updating the display.
         More detailed description in Readme.md`,
        gitHubLink: "https://github.com/piierro/web-larek-frontend"
    },
    {
        title: "Stellar Burger",
        skills: "CSS JS",
        img: icon2,
        imgBig: project2,
        description: `The project is an online burger designer with 
        the ability to order, order tracking, and registration. 
        The project functionality includes:
        Ability to register, log in, change password and personal 
        user information. Implemented using React-router-dom and secure routing.
        Tracking burger order feeds using WebSocket
        Ability to create your own burger (order) using React-DND
        View detailed information about ingredients and orders.`,
        gitHubLink: "https://github.com/piierro/stellar-burger"

    },
    {
        title: "Mesto",
        skills: "CSS JS",
        img: icon3,
        imgBig: project2,
        description: `Mesto is an educational project 
         of the Yandex Frontend Developer course, which taught
         the basics of the JavaScript language. Here we implemented: 
         connecting scripts to a web page, using HTML templates, working 
         with the DOM, setting up an assembly using the Webpack module builder, 
         dividing the code into modules, form validation, http requests, 
         as well as deploying the project to GitHub Pages.`,
        gitHubLink: "https://github.com/piierro/mesto-project-ff"

    }
]

export {projects};