import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Cloud from './Cloud/Cloud.js'

class ThirdPage extends React.Component {
    render() {
        return (
            // <TransitionGroup>
            //     <CSSTransition
            //         key="3"
            //         timeout={1000}
            //         classNames="fade"
            //     >
                    <div>
                        <h1>
                            From Development to Launching<br/>
                            <span>on Cloud Platforms</span>
                        </h1>
                        <Cloud />
                        <p>
                            Of course! My favourite platform is Amazon AWS, but I can launch on sites like Heroku too.
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
            //     </CSSTransition>
            // </TransitionGroup>
        );
    }
}

export default ThirdPage;