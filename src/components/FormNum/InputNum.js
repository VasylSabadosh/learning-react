import React, { Component } from 'react';

class InputNum extends Component {
    state = {
        a:'',
        b:'',
        c:'',
    }
    showRezult = (e) => {
        this.setState({a: e.target.value});
        this.setState({b: this.props.value});
        this.setState({c: this.state.a*this.state.b});
        console.log(this.state.a)
    }
    render() {
        return (

            <div>
                <input type='number' onChange={(e) => this.showRezult(e)}></input>
                <h1>{this.state.c}</h1>
            </div>
        );
    }
}

export default InputNum;