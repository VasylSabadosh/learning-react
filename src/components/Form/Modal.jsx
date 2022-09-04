import React from 'react';
import cl from './Modal.module.css';

const Modal = ({children, visible, setVisible}) => {

    let rootClasses = [cl.modal]

    if (visible) {
        rootClasses = [cl.active];
    }

    return (
        <div className={rootClasses.join('')} onClick={() => setVisible(false)}>
            <div className={cl.modalElem} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;