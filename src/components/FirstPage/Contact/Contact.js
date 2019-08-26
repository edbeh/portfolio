import React from 'react';
import './Contact.css';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends React.Component {
    render() {
        return (  
            <a href="mailto:contact@edwardbeh.com" className="rectangle">
                <div className="notification-text">
                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                    <span>&nbsp;contact@edwardbeh.com</span>
                </div>
            </a>
        );
    }
}

export default Contact;