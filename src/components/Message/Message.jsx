import React from 'react';
import './Message.css';

export const Message = ({second, color}) => {
    return (
        <div className='message' style={{background:color}}>
            Haz hecho click en el segundo {second} que corresponde a este color
        </div>
    )
}