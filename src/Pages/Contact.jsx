import React from "react";
import '../assets/css/index.css'
import Header from '../Components/Header/Header.jsx'
import Footer from '../Components/Footer/footer.jsx'
import ContactDetails from '../Components/ContactDetails/ContactDetails.jsx'

function Contact(){
    return(
        <>
            <Header />
            <ContactDetails />
            <Footer />
        </>
    )
}

export default Contact