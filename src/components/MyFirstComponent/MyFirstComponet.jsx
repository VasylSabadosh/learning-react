import React, { Component } from 'react';
import "./MyFirstComponet.css";
import logo from "./about1.jpg";

class MyFirstComponet extends Component {
    render() {
        return (
            <div className='first'>
                <div>Hello world</div>
                <img src={logo}></img>
            </div>
        );
    }
}

export default MyFirstComponet;