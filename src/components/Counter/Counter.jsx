import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    };

    inc= ()=> {
        this.setState({number : this.state.number + 1});
    }

    dec= ()=> {
        this.setState({number : this.state.number - 1});
    }

    render() {
        return (
            <div>
                <div>{this.state.number}</div>
                <button onClick={this.inc}>+1</button>
                <button onClick={this.dec}>-1</button>
            </div>
        );
    }
}

export default Counter;