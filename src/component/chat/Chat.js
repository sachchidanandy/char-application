/**
 * Chat box
 *
 * @file Chat.js.
 * @author SachchidanandY
*/

import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import { ENDPOINT } from '../../config';
import './_chat.css';
import InfoBar from '../info_bar/InfoBar';
import Input from '../input/Input';
import Messages from '../messages/Messages';

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
        if (messageToSend.trim()) socket.emit('sendMessage', messageToSend.trim(), () => setMessageToSend(''));
    };

    return (
        <div className='chatOuterContainer'>
            <div className='chatInnerContainer'>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input
                    messageToSend={messageToSend}
                    setMessageToSend={setMessageToSend}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;
