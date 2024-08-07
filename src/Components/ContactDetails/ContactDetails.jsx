import React from "react";
import styles from './ContactDetails.module.css';
import profileLogo from '../../assets/profile.png';
import GitHubLogo from '../../assets/logos/github.svg'
import LinkedinLogo from '../../assets/logos/linkedin.svg'
import MailLogo from '../../assets/logos/mail.svg'

function ContactDetails() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>

                    <div className={`${styles.title} ${styles.card}`}>
                        <h2>Contact Me</h2>
                        <hr />
                    </div>

                    <div className={`${styles.mail} ${styles.card}`}>
                        <h2>Mail me</h2>
                        <hr />
                        <div>
                            <div className={styles.mailContainer}>
                                <img src={MailLogo} alt="MailLogo" />
                                <p>ujjwallehri33 @gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.profile} ${styles.card}`}>
                        <h2>Ujjwal Lehri</h2>
                        <div className={styles.profileImg}>
                            <img src={profileLogo} alt="Profile" />
                        </div>
                    </div>

                    <div className={`${styles.linkedin} ${styles.card}`}>
                        <h2>LinkedIn Profile</h2>
                        <hr />
                        <div>
                            <div className={styles.linkedinContainer}>
                                <div className={styles.linkedinLogo}>
                                    <img src={LinkedinLogo} alt="linkedinLogo" />
                                </div>
                                <p>Connect with me on LinkedIn</p>
                            </div>
                        </div>
                        

                    </div>

                    <div className={`${styles.github} ${styles.card}`}>
                        <h2>GitHub Profile</h2>
                        <hr />
                        <div>
                            <div className={styles.githubLogoContainer}>
                                <div className={styles.githubLogo}>
                                    <img src={GitHubLogo} alt="GitHubLogo" />
                                </div>
                                <p>Explore my projects.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default ContactDetails;
