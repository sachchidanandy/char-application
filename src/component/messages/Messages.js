/**
 * Messages component is use to display all messages
 *
 * @file Messages.js
 * @author SachchidanandY
*/

import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import MessageDialog from '../message_dialog/MessageDialog';
import './_messages.css';

const Messages = ({ messages, name }) => (
    <ScrollToBottom className='messages' followButtonClassName='buttonToScrol'>
        {
            messages.map((message, index) => <MessageDialog
                key={index} message={message} name={name}/>)
        }
    </ScrollToBottom>
);

export default Messages;
