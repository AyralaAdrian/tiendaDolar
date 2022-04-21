import React from 'react';
import './Counter.css';

export const Counter = ({count}) => {
    return (
        <div className='counter'>{count < 0 ? 0 : count}</div>
    )
}