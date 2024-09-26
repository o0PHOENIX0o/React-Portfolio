import React from "react";
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/footer.jsx'
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
import ticTactoe from '../assets/projects/tic_tac_toe.png'
import BlogPost from '../assets/projects/BlogPost.png'
import TravelTracker from '../assets/projects/TravelTracker.png'
import quizMaster from '../assets/projects/quizMaster.png'
import ClassSchedule from '../assets/projects/ClassSchedule.png'

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
      description:"This project is a simple, static website designed to showcase products for an online store. It is built using HTML, CSS, and JavaScript, making it lightweight and easy to deploy on any web server."
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
      title: "Class Schedule Tracker",
      subTitle: "Web Development",
      img: ClassSchedule,
      demoUrl: "https://class-schedule-rsin.vercel.app",
      githubUrl: "https://github.com/o0PHOENIX0o/Class_Schedule",
      alertMessage: "",
      description:"This project is a Class Schedule web application built with React for the frontend. It helps students manage their daily schedules by providing easy access to timetables and subject syllabi. Key features include real-time class tracking, organized timetables for various student groups, and quick access to course materials, making it easier for students to stay organized and up-to-date with their academic responsibilities."
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
      title: "Travel Tracker web",
      subTitle: "Web Development",
      img: TravelTracker,
      demoUrl: "https://travel-tracker-22iz.onrender.com",
      githubUrl: "https://github.com/o0PHOENIX0o/Travel-Tracker",
      description: "This project is a responsive TravelTracker website where users can log and track the countries they have visited in India. It is built with Express.js for the backend, and EJS for the front-end templating."
    },

    {
      title: "Quiz Master web",
      subTitle: "Web Development",
      img: quizMaster,
      demoUrl: "https://quiz-master-oj9e.onrender.com",
      githubUrl: "https://github.com/o0PHOENIX0o/Quiz-Master",
      description: "This project is a responsive quiz website where users can test their knowledge with quizzes on country capitals and flags. It is built using Express.js for the backend and EJS for templating."
    },
    
    {
      title: "Tic-Tac-Toe Game",
      subTitle: "Web Development",
      img: ticTactoe,
      demoUrl: "https://tic-tac-toe-yfxi.onrender.com",
      githubUrl: "https://github.com/o0PHOENIX0o/Tic-Tac-Toe",
      description: "This project is a web-based Tic-Tac-Toe game where players can play against an AI bot that uses heuristics to determine the best move. It is built using HTML, CSS, and JavaScript, with Python Flask and SQLite3 for handling user data and keeping track of scores."
    },
    
    {
      title: "Blog-Post web",
      subTitle: "Web Development",
      img: BlogPost,
      demoUrl: "https://blog-post-web-0jlo.onrender.com/",
      githubUrl: "https://github.com/o0PHOENIX0o/Blog-post-web",
      description: "This project is a responsive blog website where users can create and share posts about photography. It is built using Express.js for the backend, with EJS for the front-end templating."
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

            <Footer />
        </>
    );
}

export default Projects;
