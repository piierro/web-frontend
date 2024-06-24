import icon from '../assets/projects/icon1-1.jpg';
import icon2 from '../assets/projects/icon2-2.jpg';
import icon3 from '../assets/projects/icon3-3.jpg';

const projects = [
  {
    title: "Web Larek Frontend",
    skills: "TypeScript, SCSS, JS, React",
    img: icon,
    description: `An online store with goods for web developers
                  - Web stall. In it you can view the product 
                  catalog, add products to the cart and place 
                  an order.
                  The project architecture is also described in
                  Readme.md`,
    gitHubLink: "https://github.com/piierro/web-larek-frontend"
  },
  {
    title: "Stellar Burger",
    skills: "CSS JS",
    img: icon2,
    description: `Stellar Burgers is a real space burger joint.
                  Somewhere at the edge of the Universe, any 
                  form of life can order the burger it wants...
                  Using an app, of course.
                  Also written integration tests in Cypress 
                  written for the burger builder page and Tests in Jest`,
    gitHubLink: "https://github.com/piierro/stellar-burger"

  },
  {
    title: "Mesto",
    skills: "CSS JS",
    img: icon3,
    description: `Mesto: An interactive page where you can add, 
                  delete, and like photos. Created an infrastructure 
                  environment using Webpack.
                  Implemented modal windows for editing a profile, 
                  adding a card and photo preview, as well as the 
                  action of liking a card. The code is divided into 
                  separate modules and form validation has been developed`,
    gitHubLink: "https://github.com/piierro/mesto-project-ff"

  }
]

export {projects};