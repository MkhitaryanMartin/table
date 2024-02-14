import React from 'react';
import Button from '../UI/button';
import "./style.css"

const Head = ({ onClick }) => {
    return (
        <>
            <div className='Head'>
                <Button text='Manage Columns' variant="inherit" onClick={onClick} />
            </div>
            <hr />
        </>
    );
};

export default Head;