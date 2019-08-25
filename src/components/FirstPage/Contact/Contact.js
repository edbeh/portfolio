import React from 'react';
import './Contact.css';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends React.Component {
    render() {
        return (  
            <a href="mailto:edbeh89@gmail.com" className="rectangle">
                <div className="notification-text">
                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                    <span>&nbsp;Edbeh89@gmail.com</span>
                </div>
            </a>
        );
    }
}

export default Contact;