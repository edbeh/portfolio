import React from 'react';
import './Contact.css';
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends React.Component {
    render() {
        return (  
            <a 
                href="mailto:edbeh89@gmail.com" 
                className="rectangle"
                target="_blank"
            >
            <div className="notification-text">
                <FontAwesomeIcon icon={faComments} size="lg"/>
                <span>&nbsp;Contact Me at edbeh89@gmail.com!</span>
            </div>
        </a>
        );
    }
}

export default Contact;
