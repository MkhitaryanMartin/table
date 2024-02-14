import React from 'react';
import "./style.css"
import Button from '../UI/button';

const Modal = ({children, title, onClose, footer}) => {
    return (
        <div className='Modal__container'>
           <div className='Modal'>
           <header className='Modal__header'>
            <h3>{title}</h3>
            <Button text='X' variant='inherit' onClick={onClose}/>
           </header>
            <div className='Modal__content'>{children}</div>
            <footer className='Modal__footer'>
                {footer}
            </footer>
            </div> 
        </div>
    );
};

export default Modal;