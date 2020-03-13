/**
 * Chat box
 *
 * @file Chat.js.
 * @author SachchidanandY
*/

import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Redirect } from 'react-router-dom';

import { ENDPOINT } from '../../config';

let socket;

const Chat = ({ location, history }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessage] = useState([]);
    const [messageToSend, setMessageToSend] = useState('');

    useEffect(() => {
        // Get user name and room name
        const { name, room } = queryString.parse(location.search);
        setName(name);
        setRoom(room);

        // Create socket connection
        socket = io.connect(ENDPOINT);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
                history.push('/');
            }
        });

        // Function to call on conponenrWillUnmount
        return () => {
            // Disconnect user
            socket.emit('disconnect');
            // Off the socket
            socket.off();
        };

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessage([...messages, message])
        });
    }, [messages]);

    const sendMessage = event => {
        event.preventDefault();
        if (messageToSend) socket.emit('sendMessage', messageToSend, () => setMessageToSend(''));
    };

    console.log(messages, messageToSend);
    return (
        <div className='chatOuterContainer'>
            <h1>
                This is Chat Page
            </h1>
            <div className='chatInnerContainer'>
                <input
                    value={messageToSend}
                    onChange={ event => setMessageToSend(event.target.value) }
                    onKeyPressCapture={ event => event.key === 'Enter' ? sendMessage(event) : null }
                />
            </div>
        </div>
    );
};

export default Chat;
