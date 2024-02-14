import React from 'react';
import "./style.css"

const Button = ({
    text="",
    onClick,
    variant=""
}) => {
    return (
        <button
            className={`Button Button--${variant}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;