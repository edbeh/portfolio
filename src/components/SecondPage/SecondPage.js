import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar.js';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class SecondPage extends React.Component {
    render() {
        return (
            <TransitionGroup>
                <CSSTransition
                    key="2"
                    timeout={1000}
                    classNames="fade"
                >
                    <div>
                        <h1>
                            My Top 3 Skills
                        </h1>

                        <ProgressBar text="React.js (Front-End)" color="rgb(54,168,233)" id="skill80" />
                        <ProgressBar text="Node.js (Back-End)" color="rgb(104, 160, 99)" id="skill90" />
                        <ProgressBar text="Amazon AWS (Hosting)" color="rgb(255,153,0)" id="skill70" />
                        <p>
                            If you want to build a fluid single-page application, you should definitely try React.js!
                        </p>
                        <p>
                            Coupled with Node.js back-end framework, your app will be truly fast and responsive.
                        </p>
                        <Link
                            className="App-link"                   
                            to="/launch"
                        >
                            What about launching the app after development?
                        </Link> 
                    </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default SecondPage;