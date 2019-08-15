import React from 'react';
import './Bunny.css'

class Bunny extends React.Component {
    render() {
        return (
            <div className="bunny" onClick={() => this.props.handleClick()}></div>
        )
    }
}

export default Bunny;