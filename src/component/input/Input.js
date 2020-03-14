/**
 * Component use to write messages
 *
 * @file Input.js
 * @author SachchidanandY
*/

import React from 'react';

import './_input.css';

const Input = ({ messageToSend, setMessageToSend, sendMessage }) => {
    return (
        <form className='form'>
            <input
                className='input'
                type='text'
                placeholder='Type a message...'
                value={messageToSend}
                onChange={ event => setMessageToSend(event.target.value) }
                onKeyPressCapture={ event => event.key === 'Enter' ? sendMessage(event) : null }
            />
            <button className='sendButton' onClick={ event => sendMessage(event) }>Send</button>
        </form>
    );
};

export default Input;
