import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
    render() {
        return (
            <div className="loading">
                <div className="progress">
                    <div className="progress_bar" id={this.props.id} style={{background: this.props.color, width: this.props.width}}>

                    </div>
                    <div id="prog_status">
                        { this.props.text }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgressBar;