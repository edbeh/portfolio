import React from 'react';
import './Contact.css';
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends React.Component {
    render() {
        return (  
            // <a href="mailto:contact@edwardbeh.com" className="rectangle">
            //     <div className="notification-text">
            //         <FontAwesomeIcon icon={faEnvelope} size="lg"/>
            //         <span>&nbsp;contact@edwardbeh.com</span>
            //     </div>
            // </a>
            <a 
                href="https://www.upwork.com/freelancers/~01258e6b7e5fd37215" 
                className="rectangle"
                target="_blank"
            >
            <div className="notification-text">
                <FontAwesomeIcon icon={faComments} size="lg"/>
                <span>&nbsp;Contact Me on Upwork!</span>
            </div>
        </a>
        );
    }
}

export default Contact;