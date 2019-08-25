import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Contact from './Contact/Contact.js';
import './FirstPage.css';

class FirstPage extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Full Stack Web App Developer<br/>
                    <span>with React.js and Node.js </span>
                </h1>
                <p>
                    Hi, I'm Edward and I've been building highly responsive web applications since 2017.
                </p>
                <p>
                    View a demo of my React movie application <a className="App-link" href="https://edbeh.github.io/react-movie" target="_blank" rel="noopener noreferrer">here</a>.
                </p>

                <Contact />

                <Link
                    className="App-link"
                    to="/skills"
                >
                    View my top skills
                </Link>  
            </div>
        );
    }
}

export default FirstPage;