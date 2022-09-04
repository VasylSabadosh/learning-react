import React from 'react';
import './FormButton.css';

const FormButton = ({children, ...props}) => {
    return (
        <div>
            <button className='FormButton' {...props} type='submit'>{children}</button>
        </div>
    );
};

export default FormButton;