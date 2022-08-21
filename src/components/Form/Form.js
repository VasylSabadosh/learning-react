import React, { Component } from 'react';
import './Form.css';
import Input1 from './Input1';
import Input2 from './Input2';
import Input3 from './Input3';


class Form extends Component {
    state = {
        data1: '',
        data2: '',
        data3: '',

        text:''
    }

    updateInputValue1 = (value) => {
        this.setState({data1:value})
    }

    updateInputValue2 = (value) => {
        this.setState({data2:value})
    }

    updateInputValue3 = (value) => {
        this.setState({data3:value})
    }

    showData = (e) => {
        e.preventDefault();
        let allData = 'Input1 : ' + this.state.data1 + ', ' + 'Input2 : ' + this.state.data2 + ', '+ 'Input3 : ' +  this.state.data3;
        this.setState({text:allData});
    }

    render() {
        return (
            <form className='form'>
                <Input1 updateInputValue = {(e)=>this.updateInputValue1(e)} inputValue = {this.state.data}/>
                <Input2 updateInputValue = {(e)=>this.updateInputValue2(e)} inputValue = {this.state.data}/>
                <Input3 updateInputValue = {(e)=>this.updateInputValue3(e)} inputValue = {this.state.data}/>


                <input type='submit' onClick={(e) => {this.showData(e)}}></input>
                <div>{this.state.text}</div>
            </form>
        );
    }
}

export default Form;