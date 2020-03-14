/**
 * Messages component is use to display all messages
 *
 * @file Messages.js
 * @author SachchidanandY
*/

import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import MessageDialog from '../message_dialog/MessageDialog';

const Messages = ({ messages, name }) => (
    <ScrollToBottom className='messages'>
        {
            messages.map(message => <MessageDialog message={message} name={name}/>)
        }
    </ScrollToBottom>
);

export default Messages;
