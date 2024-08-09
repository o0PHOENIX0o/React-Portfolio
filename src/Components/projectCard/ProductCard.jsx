import React from "react";
import styles from './ProductCard.module.css';

function ProjectCard(props) { // Renamed to match convention

    const handleIconClick = (url, message) => {
        if (message) {
            alert(message);
        } else {
            window.open(url, '_blank');
        }
    };

    const projects = props.projects;

    return (
        <>
            {projects.map((project, index) => (
                <li
                    key={index}
                    className={`${styles.projectItem} ${styles.active}`} // Use CSS module class
                    data-category="web development"
                >
                    <div className={styles.projectCard}> {/* Use CSS module class */}
                        <figure className={styles.projectImg}> {/* Use CSS module class */}
                            <div
                                className={styles.projectItemIconBox} // Use CSS module class
                                style={{ left: '35%' }}
                                onClick={() =>
                                    handleIconClick(project.demoUrl, project.alertMessage)
                                }
                            >
                                <ion-icon
                                    name="eye-outline"
                                    role="img"
                                    aria-label="eye outline"
                                ></ion-icon>
                            </div>
                            <div
                                className={styles.projectItemIconBox} // Use CSS module class
                                style={{ left: '65%' }}
                                onClick={() =>
                                    handleIconClick(project.githubUrl, project.alertMessage)
                                }
                            >
                                <ion-icon
                                    name="logo-github"
                                    role="img"
                                    aria-label="logo github"
                                ></ion-icon>
                            </div>

                            <img
                                src={project.img}
                                alt={project.title}
                                loading="lazy"
                            />
                        </figure>

                        <h3 className={styles.projectTitle}>{project.title}</h3> {/* Use CSS module class */}
                        <p className={styles.projectCategory}>{project.subTitle}</p> {/* Use CSS module class */}
                    </div>
                </li>
            ))}
        </>
    );
}

export default ProjectCard;
