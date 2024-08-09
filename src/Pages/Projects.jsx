import React from "react";
import Header from '../Components/Header/Header.jsx';
import Project_card from "../Components/projectCard/ProductCard.jsx";

import shoppingWeb from '../assets/projects/Ecom-project.png'
import catalogueWeb from '../assets/projects/Shopping-web.png'
import travelWeb from '../assets/projects/travip.png'
import hellioBooWeb from '../assets/projects/hellio-boo.png'
import MusicAppWeb from '../assets/projects/MusicApp.png'
import digiyatra from '../assets/projects/digiyatra.png'
import VDGS from '../assets/projects/VDGS.jpg'
import Calculator from '../assets/projects/Calculator.png'
import calculatorWeb from '../assets/projects/Web-Calculator.png'
import formWeb from '../assets/projects/Form-validation.png'

import '../assets/css/index.css';


const projects = [
    {
      title: "Ecommerce Website",
      subTitle: "Web development",
      img: shoppingWeb,
      demoUrl: "https://ecommerce-electronics-website.vercel.app",
      githubUrl: "https://github.com/o0PHOENIX0o/Ecommerce-Website",
      description:"This project is a full-fledged Ecommerce website built using HTML, CSS, and JavaScript for the frontend, with Flask serving as the backend API, and MySQL as the database. The website includes various functionalities to enhance user experience and streamline the online shopping process."
    },
    {
      title: "Catalog Website",
      subTitle: "Web development",
      img: catalogueWeb,
      demoUrl: "https://shopping-web-gamma.vercel.app",
      githubUrl: "https://github.com/o0PHOENIX0o/Shopping_Web.git",
      description:"his project is a simple, static website designed to showcase products for an online store. It is built using HTML, CSS, and JavaScript, making it lightweight and easy to deploy on any web server."
    },
    {
      title: "Travel Website",
      subTitle: "Web Development",
      img: travelWeb,
      demoUrl: "https://travip.netlify.app/",
      githubUrl: "",
      alertMessage: "Contact me if you want to hire me to build your website!",
      description:"Travip is a user-friendly travel website showcasing various travel packages and pricing options. Built with HTML, CSS, and JavaScript, it allows users to easily explore and book their ideal vacations."
    },
    {
      title: "Ecommerce Website",
      subTitle: "Web Development",
      img: hellioBooWeb,
      demoUrl: "https://hellio-boo.vercel.app/",
      githubUrl: "",
      alertMessage: "Contact me if you want to hire me to build your website!",
      description:"This project is a complete clothing e-commerce website built using HTML, CSS, and JavaScript for the frontend, with Flask as the backend API and MySQL as the database. The site offers a range of features designed to improve user experience and simplify the online shopping process for fashion enthusiasts"
    },
    {
      title: "Music Web App",
      subTitle: "Web Development",
      img: MusicAppWeb,
      demoUrl: "",
      githubUrl: "https://github.com/o0PHOENIX0o/Web-Music-App.git",
      alertMessage: "This is a Flask App run the API, check this out on GitHub",
      description:"This Flask web application allows users to search for music by name, fetches the corresponding music videos from YouTube, downloads them to the host machine, and makes them available for streaming within the web app."
    },
    {
      title: "Digi-Yatra",
      subTitle: "Embedded Systems",
      img: digiyatra,
      demoUrl: "",
      githubUrl: "https://github.com/o0PHOENIX0o/DigiYatra",
      alertMessage: "This is an Embedded Systems project, check this out on GitHub",
      description:"The DigiYatra system implemented on a Raspberry Pi offers a fundamental demonstration for improving the boarding process at airports. By integrating simple QR code scanning and basic facial recognition capabilities, this project lays the groundwork for a more streamlined and efficient passenger experience."
    },
    {
      title: "Visual Docking Guidance System",
      subTitle: "Embedded Systems",
      img: VDGS,
      demoUrl: "",
      githubUrl: "https://github.com/o0PHOENIX0o/VDGS",
      alertMessage: "This is an Embedded Systems project, check this out on GitHub",
      description:"The Visual Docking Guidance System is a project aimed at assisting users in docking maneuvers by providing visual feedback based on the position of objects detected in a camera feed. This system utilizes computer vision techniques for object detection and MQTT communication for real-time interaction with external devices, such as displays controlled by Arduino."
    },
    {
      title: "GUI Calculator",
      subTitle: "Python",
      img: Calculator,
      demoUrl: "",
      githubUrl: "https://github.com/o0PHOENIX0o/GUI-based-Calculator",
      alertMessage: "This is a Python project, check this out on GitHub",
      description:"The Calculator App provides a user-friendly interface for performing arithmetic calculations. It supports addition, subtraction, multiplication, division, and more. With its intuitive design, users can easily enter expressions and get instant results."
    },
    {
      title: "Web Calculator",
      subTitle: "Web Development",
      img: calculatorWeb,
      demoUrl: "https://web-calculator-six-beta.vercel.app",
      githubUrl: "https://github.com/o0PHOENIX0o/web-calculator",
      description:"This project is a web calculator with a clean interface, built using HTML, CSS, and JavaScript. It supports basic arithmetic operations, squaring, and percentages, designed for easy use across devices."
    },
    {
      title: "Form Validation",
      subTitle: "Web development",
      img: formWeb,
      demoUrl: "https://form-validation-rho-peach.vercel.app",
      githubUrl: "https://github.com/o0PHOENIX0o/Form-Validation",
      description:"This project is a form validation web application designed to ensure user inputs are correct and secure. Built using HTML, CSS, and JavaScript, it validates fields like name, email, phone number, and password, providing real-time feedback to users."
    }
  ];
  


function Projects() {
    
    return (
        <>
            <Header />

            <div className="mainContainer">
                    <ul className="projectList">
                        <Project_card projects={projects} />
                    </ul>
            </div>
        </>
    );
}

export default Projects;
