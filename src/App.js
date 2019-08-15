import React from 'react';
import Bunny from './components/Bunny/Bunny.js';
import Speech from './components/Speech/Speech.js'
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
        content: `I'm made of pure CSS! Well, except when you click on me, that's Javascript!`
      },
      {
        id: 1,
        content: `Am I a dog, or am I a bunny?? I don't even know anymore...`
      },
      {
        id: 2,
        content: `This page is made with React.js, notice how the elements flow seamlessly?`
      },
      {
        id: 3,
        content: `React.js front-end + Node.js back-end = Complete web application!`
      },
      {
        id: 4,
        content: `If you like movies, check out my React movie web app in the first page!`
      },
      {
        id: 5,
        content: `Hit me up at Upwork if you are looking for a passionate web developer!`
      },
      {
        id: 6,
        content: `Javascript is my primary language, but I also extensive experience with VBA!`
      },
      {
        id: 7,
        content: `As long as I'm having fun, I'm not quitting!`
      },
      {
        id: 8,
        content: `Tell me, what is it you plan to do with your one wild and precious life?`
      },
      {
        id: 9,
        content: `Software testing is a sport like hunting -- it's called bug-hunting.`
      },
      {
        id: 10,
        content: `Javascript is the duct tape of the internet.`
      },
      {
        id: 11,
        content: `Am I ever gonna run out of things to say? Well maybe, but it is not this day.`
      },
      {
        id: 12,
        content: `Need to build a simple website? Well hit up me and see if we can work something out!`
      },
      {
        id: 13,
        content: `When I first started learning React, I didn't know web apps can be so elegant!`
      },
      {
        id: 14,
        content: `Need to build and deploy a full web application? I have experience with that!`
      },
      {
        id: 15,
        content: `You know what? I once thought Europe is a country...`
      },
      {
        id: 16,
        content: `This is the 10th time you are clicking me! You really love listening to me don't ya?`
      },
      {

      }
    ],
    currentSpeech : '',
    speechActive: false,
    clickNumber: 0
  }

  randomSpeech = () => {
    let randomId = Math.floor(Math.random() * this.state.speech.length);
    let randomSpeech = this.state.speech[randomId].content;
    let clickNumber = this.state.clickNumber;

    this.setState({
      currentSpeech: randomSpeech,
      speechActive: true,
      clickNumber
    })

    setTimeout(() => {
      this.setState({
        speechActive: false,
      })
    }, 2500)
  }

  componentDidMount() {
    this.randomSpeech();
  }

  render() {
    return (
      <div>
        <div className="App">
      <header className="App-header">
        <h1>
          Full Stack Web App Developer<br/>
          <span>with React.js and Node.js </span>
        </h1>
        <p>
          Hi, I'm Edward and I've been building highly responsive web applications since 2017. <br/>
          View a demo of my React movie application <a className="App-link" href="https://edbeh.github.io/react-movie" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          See My Other Skills
        </a>

        <div className="character">
          <Speech 
            speech={ this.state.currentSpeech } 
            handleSpeech={ this.state.speechActive }
          />
          <Bunny handleClick={ this.randomSpeech }/>
        </div>
        

      </header>
    </div>
      </div>
    )
  }
}

export default App

