import React from "react";
import styles from './ContactDetails.module.css';
import profileLogo from '../../assets/profile.png';

function ContactDetails() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>

                    <div className={`${styles.title} ${styles.card}`}>
                        <h2>Contact Me</h2>
                        <hr />
                        <p></p>
                    </div>

                    <div className={`${styles.mail} ${styles.card}`}>
                        <h2>Mail me</h2>
                        <hr />
                        <p></p>
                    </div>

                    <div className={`${styles.profile} ${styles.card}`}>
                        <h2>Ujjwal Lehri</h2>
                        <div className={styles.profileImg}>
                            <img src={profileLogo} alt="Profile" />
                        </div>
                    </div>

                    <div className={`${styles.linkedin} ${styles.card}`}>
                        <h2>Connect on LinkedIn</h2>
                        <hr />
                        <p></p>
                    </div>

                    <div className={`${styles.github} ${styles.card}`}>
                        <h2>GitHub</h2>
                        <p></p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ContactDetails;
