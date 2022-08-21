import React, { Component } from 'react';
import InputNum from './InputNum';
import './FormNum.css';

class FormNum extends Component {
    render() {
        return (
            <div className='FormNum'>
                <InputNum value = {0.5}/>
                <InputNum value = {0.05}/>
            </div>
        );
    }
}

export default FormNum;