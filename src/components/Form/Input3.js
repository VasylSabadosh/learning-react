import React, { Component } from 'react';



class Input extends Component {
    render() {
        return (
            <input value = {this.props.inputValue} onChange={(e) => {this.props.updateInputValue(e.target.value)}}>
            </input>
        );
    }
}

export default Input;