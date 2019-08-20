import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class ThirdPage extends React.Component {
    render() {
        return (
            <TransitionGroup>
                <CSSTransition
                    key="3"
                    timeout={1000}
                    classNames="fade"
                >
                    <div>
                        <h1>
                            From Development to Launch<br/>
                            <span>on Amazon Web Services</span>
                        </h1>
                        <p>
                            I learned to develop and host apps because I'm passionate about building useful web apps.
                        </p>
                        <p>
                            I'd love to work with you if you are developing a Javascript app!
                        </p>
                        <Link
                            className="App-link"
                            to="/"
                        >
                            Contact me!
                        </Link> 
                    </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default ThirdPage;