import React from "react";
import './Contact.css';
import Header from "./assets/components/Header";
import anna from './assets/media/images/anna.jpg'
import AboutTag from "./assets/components/AboutTag";

const Contact = () => {
    return (
        <>
            <div id="main" className='main section'>
                <div>
                    <Header />
                </div>
                <div className="contact-container">
                    <div className="contact-title">
                        get in touch
                    </div>
                    <a href="mailto:anna4freitas@gmail.com">
                        <button className="email-button">
                            send email
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact;