import React from "react";
import styles from './home.module.css'

import profileLogo from '../../assets/profile.png';
import reactLogo from '../../assets/logos/react.svg';
import cpp from '../../assets/logos/cpp.svg';
import css from '../../assets/logos/css.svg';
import embedded from '../../assets/logos/embedded.svg';
import git from '../../assets/logos/git.svg';
import html from '../../assets/logos/html.svg';
import IoT from '../../assets/logos/IoT.svg';
import java from '../../assets/logos/java.svg';
import javascript from '../../assets/logos/javascript.svg';
import jquery from '../../assets/logos/jquery.svg';
import MySQL from '../../assets/logos/MySQL.svg';
import node from '../../assets/logos/node.svg';
import psql from '../../assets/logos/psql.svg';
import python from '../../assets/logos/python.svg';
import rasp from '../../assets/logos/rasp.svg';
import sql from '../../assets/logos/sql.svg';


function HomeContent() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>

                <div className={`${styles.card} ${styles.aboutMe}`}>
                    <h2>About me</h2><hr />
                    <p>
                        I'm a tech enthusiast with a strong background in <span className={styles.keyword}>web development</span>, <span className={styles.keyword}>embedded systems</span>, and <span className={styles.keyword}>IoT development</span>. Throughout my career, I've gained experience across various fields, making me a well-rounded and skilled individual in the tech world.
                    </p>
                </div>

                <div className={`${styles.card} ${styles.learning}`}>
                    <h2>Currently Learning</h2><hr />
                    <div className={styles.logo}>
                        <img src={reactLogo} alt="reactLogo" />
                    </div>
                </div>

                <div className={`${styles.card} ${styles.title}`}>
                    <h2>Student, <br /> Web developer, <br /> IoT Developer</h2>
                </div>

                <div className={`${styles.card} ${styles.profile}`}>
                    <h2>Ujjwal Lehri</h2>
                    <div className={styles.profileImg}>
                        <img src={profileLogo} alt="Profile" />
                    </div>
                </div>

                <div className={`${styles.card} ${styles.learningContent}`}>
                    <h2>Currently Exploring React</h2>
                    <p>a javascript library for frontend development</p>
                </div>

                <div className={`${styles.card} ${styles.skills}`}>
                    <h2>My skills</h2>
                    <hr />
                    <p>I have worked with: </p>
                    <div className={styles.skillContainer}>
                        <div><img src={cpp} alt="C++" /></div>
                        <div><img src={css} alt="CSS" /></div>
                        <div><img className={styles.embedded} src={embedded} alt="Embedded Systems" /></div>
                        <div><img src={git} alt="Git" /></div>
                        <div><img src={html} alt="HTML" /></div>
                        <div><img src={IoT} alt="IoT" /></div>
                        <div><img src={java} alt="Java" /></div>
                        <div><img src={javascript} alt="JavaScript" /></div>
                        <div><img src={jquery} alt="jQuery" /></div>
                        <div><img className={styles.MySQL} src={MySQL} alt="MySQL" /></div>
                        <div><img src={node} alt="Node.js" /></div>
                        <div><img src={psql} alt="PostgreSQL" /></div>
                        <div><img src={python} alt="Python" /></div>
                        <div><img src={rasp} alt="Raspberry Pi" /></div>
                        <div><img src={sql} alt="SQL" /></div>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.education}`}>
                    <h2>Education</h2>
                    <hr />
                    <ul>
                        <li className={styles.timelineItem}>
                            <div className={styles.degree}>
                                <h4>B.Tech in Computer Science and Engineering (CSE)</h4>
                            </div>
                            <div className={styles.institution}>
                                University School of Information, Communication & Technology
                            </div>
                            <div className={styles.duration}>2024 - 2027</div>
                            <div className={styles.description}>
                                Pursuing B.Tech in Computer Science and Engineering, focusing on advanced computing technologies and software development.
                            </div>
                        </li>

                        <li className={styles.timelineItem}>
                            <div className={styles.degree}>
                                <h4>Diploma in Electronics and Communication Engineering (ECE)</h4>
                            </div>
                            <div className={styles.institution}>
                                Pusa Institute of Technology
                            </div>
                            <div className={styles.duration}>2020 - 2023</div>
                            <div className={styles.description}>
                                <p>Completed a diploma in Electronics and Communication with a distinction, achieving an 87.6% score. Gained practical experience in embedded systems and communication technologies.</p>
                            </div>
                        </li>

                        <li className={styles.timelineItem}>
                            <div className={styles.degree}>
                                <h4>Secondary Education</h4>
                            </div>
                            <div className={styles.institution}>
                                Rajkiya Pratibha Vikas Vidyalayas
                            </div>
                            <div className={styles.duration}>2020</div>
                            <div className={styles.description}>
                                <p>Completed Secondary Education with a 78% score, gaining a strong foundation in science and mathematics from RPVV.</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default HomeContent