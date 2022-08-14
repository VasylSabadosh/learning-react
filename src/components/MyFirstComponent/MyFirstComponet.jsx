import React, { Component } from 'react';
import "./MyFirstComponet.css";

class MyFirstComponet extends Component {

    render() {
        return (
            <div className='first'>
                <div>{this.props.message}</div>
            </div>
        );
    }
}

export default MyFirstComponet;