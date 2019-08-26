import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import FirstPage from './components/FirstPage/FirstPage.js';
import SecondPage from './components/SecondPage/SecondPage.js';
import ThirdPage from './components/ThirdPage/ThirdPage.js';
import Bunny from './components/Bunny/Bunny.js';
import Speech from './components/Speech/Speech.js';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.randomSpeech = this.randomSpeech.bind(this);
  }

  state = {
    speech: [
      {
        id: 0,
        content: `Hello there, welcome to my portfolio page! You can click me to talk to me!`
      },
      {
        id: 1,
        content: `I'm made of pure CSS! Well, except when you click on me, that's Javascript!`
      },
      {
        id: 2,
        content: `This page is made with React.js, notice how the elements flow seamlessly?`
      },
      {
        id: 3,
        content: `It's made of the same framework powering Facebook and Instagram's newsfeed.`
      },
      {
        id: 4,
        content: `If you like this style, definitely check out my React movie web app in the first page!`
      },
      {
        id: 5,
        content: `With React.js and Node.js, we can build a full application with just javascript!`
      },
      {
        id: 6,
        content: `We can launch your application on cloud platform like Amazon's AWS too.`
      },
      {
        id: 7,
        content: `Did you know AWS offers free web app hosting for the 1st year?`
      },
      {
        id: 8,
        content: `You can basically save business operating costs for 1 whole year!`
      },
      {
        id: 9,
        content: `Hit me up if you are looking for a passionate web developer!`
      },
      {
        id: 10,
        content: `That's all from me, look around my portfolio and see if anything interests you!`
      }
    ],
    currentSpeech : '',
    speechActive: false,
    clickNumber: 0,
    firstLoad: true,
    appear: true
  }

  randomSpeech = () => {
    if (this.state.speechActive === false) {
      let clickNumber = this.state.clickNumber;
      clickNumber = clickNumber > 10 ? 0 : clickNumber;
      let randomSpeech = this.state.speech[clickNumber].content;
      clickNumber++;

      this.setState({
        currentSpeech: randomSpeech,
        speechActive: true,
        clickNumber
      })

      setTimeout(() => {
        this.setState({
          speechActive: false,
        })
      }, 3000)
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.randomSpeech();
    }, 2000);
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  in={this.state.appear}
                  timeout={1500}
                  classNames="fade"
                  appear={true}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={ FirstPage } />
                    <Route path="/skills" component={ SecondPage } />
                    <Route path="/launch" component={ ThirdPage } />
                    <Route component={ FirstPage } />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
            
            <div className="character">
              <Speech 
                speech={ this.state.currentSpeech } 
                handleSpeech={ this.state.speechActive }
              />
              <Bunny handleClick={ this.randomSpeech }/>
            </div>
          </header>
        </div>
      </HashRouter>
    )
  }
}

export default App

