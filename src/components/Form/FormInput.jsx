import React from 'react';
import classes from './FormInput.module.css';

const FormInput = (props) => {
    return (
        <div>
            <input className={classes.FormInput} {...props}></input>
        </div>
    );
};

export default FormInput;