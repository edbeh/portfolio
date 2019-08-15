import React, { Component } from 'react';
import './Speech.css';

export class Speech extends Component {
    render() {
        return (
            <h4 className={ this.props.handleSpeech ? 'speech-bubble activate' : 'speech-bubble' }>
                { this.props.speech }
            </h4>
        )
    }
}

export default Speech
