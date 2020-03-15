/**
 * Message dialog of each message
 *
 * @file MessageDialog.js
 * @author SachchidanandY
*/

import React from 'react';
import ReactEmoji from 'react-emoji';

import './_messageDialog.css';

const MessageDialog = ({ message: { user, text }, name }) => {
    let isSendByCurrentUser = user === name.trim().toLowerCase() || false;

    return (
        isSendByCurrentUser ? (
            <div className='messageContainer justifyEnd'>
                <p className='sentText pr-10'>{user}</p>
                <div className='messageBox bgBlue'>
                    <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className='messageContainer justifyStart'>
                <div className='messageBox bgLight'>
                    <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
                </div>
                <p className='sentText pl-10'>{user}</p>
            </div>
        )
    );
};

export default MessageDialog;
