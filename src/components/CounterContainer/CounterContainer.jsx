import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Counter } from '../Counter/Counter';
import { Message } from '../Message/Message';
import { UsersStats } from '../UsersStats/UsersStats';
import { getColor } from '../../utils/index';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import './CounterContainer.css';

export const CounterContainer = () => {
    const [counterLS, setCounterLS] = useLocalStorage("counter", 60);
    const [counter, setCounter] = useState(counterLS);
    const [click, setClick] = useState(counterLS !== 60);
    const [second, setSecond] = useState(0);
    const updateCounter = () => {
        if(click) return;
        setCounter(previousValue => { 
            return previousValue > 0 
                ? previousValue -1
                : 0
        });
    }
    const updateClick = () => {
        setClick(true);
    }

    useEffect(() => {
        let intervalId;
        if(!click) {
            intervalId = setInterval(updateCounter, 1000);
        }

        return () => {
            clearInterval(intervalId);
        }
    }, [click])

    useEffect(() => {
        if (click) {
            setSecond(counter);
            setCounterLS(counter);
        }
    }, [click])

    return (
        <>
            <div className='container'>
                <Button onClick={updateClick} disabled={click ? true : false} />
                <Counter count={click ? 60 : counter} />
            </div>
            {click && (
                <>
                    <Message second={second} color={getColor(second)} />
                    <UsersStats/>
                </>
            )}
        </>
    )
}