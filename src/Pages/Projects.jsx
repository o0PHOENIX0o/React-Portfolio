import React from "react";
import Header from '../Components/Header/Header.jsx';
import Project_card from "../Components/projectCard/ProductCard.jsx";
import EcomProject from '../assets/projects/Ecom-project.png'
import '../assets/css/index.css';


const projects = [
    {
        title: "E-Commerce Website",
        subTitle: "Web Development",
        img: EcomProject,
        demoUrl: "https://ecommerce-electronics-website.vercel.app",
        githubUrl: "https://github.com/o0PHOENIX0o/Ecommerce-Website",
        // alertMessage: "You are viewing the E-Commerce demo!",
    }
];


function Projects() {
    
    return (
        <>
            <Header />
            <ul className="projectList">
                <Project_card projects={projects} />
            </ul>
        </>
    );
}

export default Projects;
