import React, { Component } from 'react';
import "./MyFirstComponet.css";
import { v4 as uuidv4 } from 'uuid';

class MyFirstComponet extends Component {
    state = {
        a:this.props.arr,

    }

    render() {
        return (
            <div className='first'>
                <div>
                    {this.state.a
                        .filter((item, index) => {
                        return this.state.a.indexOf(item) === index
                        })
                        .map( name => <p key={uuidv4()}>{name}</p> )}
                </div>
            </div>
        );
    }
}

export default MyFirstComponet;