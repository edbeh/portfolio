import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './FirstPage.css';

class FirstPage extends React.Component {
    render() {
        return (
            <TransitionGroup>
                <CSSTransition
                    key="1"
                    timeout={1000}
                    classNames="fade"
                >
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

                        <Link
                            className="App-link"
                            to="/skills"
                        >
                            View my top skills
                        </Link>  
                    </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default FirstPage;