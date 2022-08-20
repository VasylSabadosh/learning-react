import React, { Component } from 'react';
import "./WithVisibility.css"

class WithVisibility extends Component {

    render() {
        return (
            <div  className='visibleDiv'>
                <p  className='visibleDiv'>I'm visible</p>
            </div>
        );
    }
}

export default WithVisibility;