import React from 'react';
import './Button.css';

export const Button = ({onClick, disabled}) => {
    return (
        <div className='btn-container'>
            <button 
                className={`btn ${disabled ? 'disabled' : 'enabled'}`}
                onClick={onClick} 
                disabled={disabled}
            >
                Stop
            </button>
        </div>
    )
}