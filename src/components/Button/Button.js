import React, { Component } from 'react';
import WithVisibility from '../WithVisibility/WithVisibility';
import "./Button.css";

class Button extends Component {
    state = {
        visibility: true,
    }
    render() {
        return (
            <div className='button'>
                {this.state.visibility && <WithVisibility />}
                <button onClick={
                    ()=> this.setState((state)=>({visibility:!state.visibility}))}>Hide/Show</button>
            </div>
        );
    }
}

export default Button;