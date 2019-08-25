import React from 'react';
import './Cloud.css';

class Cloud extends React.Component {
    render() {
        return (
            <div>
                <div class='loader__wrapper'>
                <div class='number__wrapper'>
                    <div class='number'></div>
                    <div class='number'></div>
                    <div class='number'></div>
                    <div class='number'></div>
                    <div class='number'></div>
                </div>
                <div class='cloud'></div>
                </div>
            </div>
        );
    }
}

export default Cloud;