import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './_join.css';

const Join = () => {

    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');

    // Handle inputs in input fields
    const handleInput = (event) => {
        if (event.target.name === 'Name') {
            setName(event.target.value);
        }

        if (event.target.name === 'Room') {
            setRoom(event.target.value);
        }
    };

    // Handle button click
    const handleButtonClick = (event) => (!name || !room) ? event.preventDefault() : null;

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <h1 className='heading'>{name}</h1>
                <h1 className='heading'>{room}</h1>
                <div><input placeholder='Name' name='Name' className='joinInput' type='text' onChange={handleInput}/></div>
                <div><input placeholder='Room' name='Room' className='joinInput mt-20' type='text' onChange={handleInput}/></div>
                <Link onClick={handleButtonClick} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
